import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { LOCALES } from './constants/constants.js'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

async function getDomain() {
  try {
    const cname = await readFile('./public/CNAME', 'utf-8')
    return `https://${cname.trim()}`
  } catch {
    return process.env.NEXT_PUBLIC_DOMAIN || 'https://teplostanski.github.io/teplostanski.dev'
  }
}

async function getLastModified(path) {
  try {
    const { stdout } = await execAsync(`git log -1 --format="%as" ${path}`)
    return stdout.trim()
  } catch {
    const date = new Date()
    return date.toISOString().split('T')[0]
  }
}

async function getContentPathFromPage(pagePath) {
  try {
    const content = await readFile(pagePath, 'utf-8')
    const match = content.match(/getMarkdownData\(['"](.*?)['"]\)/)
    return match ? match[1] : null
  } catch {
    return null
  }
}

async function getMarkdownSlugs(contentPath) {
  const files = await readdir(contentPath, { withFileTypes: true })
  return files
    .filter(file => file.isFile() && file.name.endsWith('.md'))
    .map(file => file.name.replace('.md', ''))
}

async function getAppPaths(dir = './src/app', basePath = '') {
  const paths = new Set()
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name.startsWith('_') ||
      entry.name.startsWith('.') ||
      entry.name === 'api' ||
      entry.name === 'fav' ||
      entry.name.includes('.')) {
      continue
    }

    if (entry.isDirectory()) {
      const isDynamicRoute = entry.name.startsWith('[') && entry.name.endsWith(']')
      const currentPath = join(basePath, isDynamicRoute ? '' : entry.name)

      if (isDynamicRoute) {
        const pagePath = join(dir, entry.name, 'page.tsx')
        const contentPath = await getContentPathFromPage(pagePath)
        if (contentPath) {
          const slugs = await getMarkdownSlugs(contentPath)
          slugs.forEach(slug => {
            paths.add(join(basePath, slug))
          })
        }
      } else if (entry.name !== 'en') {
        paths.add(currentPath)
        const subPaths = await getAppPaths(join(dir, entry.name), currentPath)
        subPaths.forEach(p => paths.add(p))
      }
    }
  }

  return paths
}

async function generateRobots(domain) {
  const robots = `\
# Печеньки не трогать! 🍪
# Бип-буп, товарищ робот!
# Следим за тобой 👀

User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml
`

  await writeFile('./public/robots.txt', robots)
  console.log('Robots.txt generated successfully')
}

async function generateSitemap() {
  const paths = await getAppPaths()
  paths.add('')
  const domain = await getDomain()

  await generateRobots(domain)

  const urlEntries = await Promise.all([...paths].map(async path => {
    const lastmod = await getLastModified(path === '' ? '.' : `./src/app/${path}`)
    return LOCALES.map(locale => `
    <url>
      <loc>${domain}${locale.prefix === '/' ? '' : locale.prefix}/${path.replace(/^\//, '')}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${path === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')
  }))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Ответ на главный вопрос жизни, вселенной и всего такого - 42 -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries.join('')}
</urlset>`

  await writeFile('./public/sitemap.xml', sitemap)
  console.log('Sitemap generated successfully')
}

generateSitemap().catch(console.error) 
import { locales } from '@/shared/constants/locales'
import { normalizePath } from './normalizePath'

export const normalizeLocalePath = (path: string, newLocale: string) => {
  let newPath = path

  // Remove existing locale prefix if any
  locales.forEach((lang) => {
    if (newPath.startsWith(`${lang.prefix}/`)) {
      newPath = newPath.replace(`${lang.prefix}`, '')
    } else if (newPath === lang.prefix) {
      newPath = '/'
    }
  })

  // Add new locale prefix
  const selectedLang = locales.find((lang) => lang.code === newLocale)
  if (selectedLang?.prefix) {
    newPath = `${selectedLang.prefix}${newPath}`
  }

  return normalizePath(newPath)
}

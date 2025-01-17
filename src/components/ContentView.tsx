import Image from 'next/image'
import MarkdownRender from '@/components/MarkdownRender/MarkdownRender'
import { type MarkdownData } from '@/shared/utils/getMarkdownData'
import { normalizePath } from '@/shared/utils/normalizePath'

interface ContentViewProps {
  slug: string
  markdownData: MarkdownData[]
}

export default function ContentView({ slug, markdownData }: ContentViewProps) {
  const data = markdownData.find((data) => data.slug === slug)

  if (!data) return null

  const imageSrcPath =
    data.metadata.image && normalizePath(data.metadata.image, true, false)

  return (
    <main>
      <article>
        <h2>{data.metadata.name}</h2>
        {imageSrcPath && (
          <Image
            src={imageSrcPath}
            alt={`${data.metadata.name} ${data.metadata.description}`}
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-auto'
            priority
          />
        )}
        <MarkdownRender content={data.content} />
      </article>
    </main>
  )
}

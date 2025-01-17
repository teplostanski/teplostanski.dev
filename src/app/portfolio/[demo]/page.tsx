import ContentView from '@/components/ContentView'
import getMarkdownData from '@/shared/utils/getMarkdownData'

interface ContentViewPageProps {
  params: { demo: string }
}

export default function ContentViewPageRu({ params }: ContentViewPageProps) {
  const slug = params.demo
  const markdownData = getMarkdownData('content/portfolio/ru')

  return <ContentView slug={slug} markdownData={markdownData} />
}

export function generateStaticParams() {
  const markdownData = getMarkdownData('content/portfolio/ru')

  return markdownData.map((data) => ({
    demo: data.slug,
  }))
}

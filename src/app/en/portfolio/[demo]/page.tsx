import ContentView from '@/components/ContentView'
import getMarkdownData from '@/shared/utils/getMarkdownData'

interface ContentViewPageProps {
  params: { demo: string }
}

export default function ContentViewPageEn({ params }: ContentViewPageProps) {
  const slug = params.demo
  const markdownData = getMarkdownData('content/portfolio/en')

  return <ContentView slug={slug} markdownData={markdownData} />
}

export function generateStaticParams() {
  const markdownData = getMarkdownData('content/portfolio/en')

  return markdownData.map((data) => ({
    demo: data.slug,
  }))
}

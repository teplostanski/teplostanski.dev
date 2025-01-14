import ContentView from '@/components/ContentView'
import getMarkdownData from '@/shared/utils/getMarkdownData'

interface ContentViewPageProps {
  params: { project: string }
}

export default function ContentViewPageEn({ params }: ContentViewPageProps) {
  const slug = params.project
  const markdownData = getMarkdownData('content/projects/en')

  return <ContentView slug={slug} markdownData={markdownData} />
}

export function generateStaticParams() {
  const markdownData = getMarkdownData('content/projects/en')

  return markdownData.map((data) => ({
    project: data.slug,
  }))
}

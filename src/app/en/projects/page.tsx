import PreviewHeader from '@/components/PreviewHeader/PreviewHeader'
import PreviewList from '@/components/PreviewList/PreviewList'
import getMarkdownData from '@/shared/utils/getMarkdownData'

export default function HomePageEn() {
  const data = getMarkdownData('content/projects/en')

  return (
    <main>
      <PreviewHeader translationScope='ProjectsPage' />
      <PreviewList data={data} />
    </main>
  )
}

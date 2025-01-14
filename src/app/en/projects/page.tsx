import PreviewList from '@/components/PreviewList/PreviewList'
import getMarkdownData from '@/shared/utils/getMarkdownData'

export default function HomePageEn() {
  const data = getMarkdownData('content/projects/en')

  return (
    <main>
      <PreviewList data={data} />
    </main>
  )
}

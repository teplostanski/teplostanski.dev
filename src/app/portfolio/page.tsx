import PreviewHeader from '@/components/PreviewHeader/PreviewHeader'
import PreviewList from '@/components/PreviewList/PreviewList'
import getMarkdownData from '@/shared/utils/getMarkdownData'

export default function HomePageRu() {
  const data = getMarkdownData('content/portfolio/ru')

  return (
    <main>
      <PreviewHeader translationScope='PortfolioPage' />
      <PreviewList data={data} />
    </main>
  )
}

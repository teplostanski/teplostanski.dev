import Head from 'next/head'
import { keywords, PageIndexDesc, PageIndexTitle } from '../constants'

const Index = () => {
  return (
    <>
      <Head>
        <title>{PageIndexTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PageIndexDesc} />
      </Head>
      <div>Index</div>
    </>
  )
}

export default Index

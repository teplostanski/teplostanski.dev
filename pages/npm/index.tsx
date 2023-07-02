import Head from 'next/head'
import { keywords, PageNpmDesc, PageNpmTitle } from '../../constants'

const Npm = () => {
  return (
    <>
      <Head>
        <title>{PageNpmTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PageNpmDesc} />
      </Head>
      <div>Npm</div>
    </>
  )
}

export default Npm

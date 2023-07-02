import Head from 'next/head'
import { keywords, PageProjectsDesc, PageProjectsTitle } from '../../constants'

const Projects = () => {
  return (
    <>
      <Head>
        <title>{PageProjectsTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PageProjectsDesc} />
      </Head>
      <div>Projects</div>
    </>
  )
}

export default Projects

import Head from 'next/head'
import ProjectsLayout from '../../layouts/ProjectsLayout'
import { keywords, PageProjectsDesc, PageProjectsTitle } from '../../constants'

const Projects = () => {
  return (
    <ProjectsLayout>
      <Head>
        <title>{PageProjectsTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PageProjectsDesc} />
      </Head>
      <div>Projects</div>
    </ProjectsLayout>
  )
}

export default Projects

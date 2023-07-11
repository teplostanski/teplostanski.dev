import MainLayout from './MainLayout'
import { ProjectsLayoutProps } from '../utils/types'

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return (
    <MainLayout>
      <div>dada</div>
      <section>{children}</section>
    </MainLayout>
  )
}

export default ProjectsLayout

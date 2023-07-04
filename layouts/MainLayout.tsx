import Header from '../components/Header/Header'
import { MainLayoutProps } from '../utils/types'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout

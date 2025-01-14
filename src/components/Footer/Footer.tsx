import { LocaleRouteSwitcher } from '../LocaleRouteSwitcher'

const Footer = () => {
  let currentYear = new Date().getFullYear()

  return (
    <footer className='flex items-center gap-4'>
      <p>&copy; 2022-{currentYear}</p>
      <LocaleRouteSwitcher />
    </footer>
  )
}

export default Footer

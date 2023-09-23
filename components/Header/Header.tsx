import Link from 'next/link'
import { nanoid } from 'nanoid'
import styles from './Header.module.scss'

const Header = () => {
  const navItems = [
    {
      name: 'проекты',
      path: '/projects',
    },
  ]

  return (
    <header className={styles.container}>
      <Link className={styles.logo} href={'/'}>
        <span>teplostanski</span>
        <span className={styles.text}>.dev</span>
      </Link>
      <nav className={styles.nav}>
        {navItems.map(({ name, path }) => (
          <ul className={styles.nav__list} key={nanoid()}>
            <li className={styles.nav__item}>
              <Link href={path}>{name}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  )
}

export default Header

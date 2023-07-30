import { nanoid } from 'nanoid'
import styles from './Header.module.scss'

const Header = () => {
  const navItems = [
    {
      name: 'проекты',
      path: 'https://github.com/teplostanski/portfolio#readme',
    },
  ]

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <span>portfolio</span>
        <span className={styles.text}>version 2</span>
      </div>
      <nav className={styles.nav}>
        {navItems.map(({ name, path }) => (
          <ul className={styles.nav__list} key={nanoid()}>
            <li className={styles.nav__item}>
              <a href={path}>{name}</a>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  )
}

export default Header

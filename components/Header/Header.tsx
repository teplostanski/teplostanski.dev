import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <span>portfolio</span>
        <span className={styles.text}>version 2</span>
      </div>
    </header>
  )
}

export default Header

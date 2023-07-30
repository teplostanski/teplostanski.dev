import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        {/*<div className={styles.first}>t</div>
        <div className={styles.second}>i</div>*/}
        <span>portfolio</span>
        <span className={styles.text}>version 2</span>
      </div>
    </header>
  )
}

export default Header

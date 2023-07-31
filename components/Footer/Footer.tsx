import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        creator Igor Teplostanski &copy; 2022-2023
      </span>
    </footer>
  )
}

export default Footer

import cn from 'classnames'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <section className={styles.container}>
      <div className={cn(styles.container__item, styles.container__item_image)}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.container__item}>
        <div className={styles.description}>
          <div className={styles.description__background}>Dev</div>
          <div className={styles.description__text}>
            <span className={styles.description__subtitle}>Привет!</span>
            <span className={styles.description__subtitle}>
              Я Игорь Теплостанский
            </span>
            <span className={styles.description__title}>
              Frontend разработчик
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main

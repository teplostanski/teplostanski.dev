import Image from 'next/image'
import cn from 'classnames'
import ava from '../../assets/images/ava-transformed.png'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <section className={styles.container}>
      <div className={cn(styles.container__item, styles.container__item_image)}>
        <Image className={styles.image} src={ava} alt="me" />
      </div>
      <div className={styles.separator}></div>
      <div
        className={cn(styles.container__item, styles.container__description)}
      >
        <div className={styles.description}>
          <div className={styles.description__background}>Dev</div>
          <div className={styles.description__wrapper}>
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

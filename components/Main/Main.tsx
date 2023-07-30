import Image from 'next/image'
import cn from 'classnames'
import ava from '../../assets/images/ava.png'
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
          <div className={styles.wrapper}>
            <span className={cn(styles.rotate)}>Привет</span>
            <span className={cn(styles.subtitle)}>Я Игорь Теплостанский</span>
            <span className={cn(styles.title)}>Frontend разработчик</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main

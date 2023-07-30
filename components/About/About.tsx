import styles from './About.module.scss'

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <div className={styles.description__background}>About</div>
        <div className={styles.description__wrapper}>
          <p className={styles.description__text}>
            Мне всегда нравилось интернет-искусство, особенно net-art. И желание
            создавать нечто похожее привело меня в Веб-разработку. Именно
            поэтому стремлюсь к профессиональному росту и развитию в сфере
            Frontend.
          </p>
          <p className={styles.description__text}>
            В свободное время люблю кастомить GNU/Linux и изучать терминальные
            утилиты. <br /> Готов просидеть не одни сутки, изучая задачу, пока
            не решу ее.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

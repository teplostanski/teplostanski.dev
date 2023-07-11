import Image from 'next/image'
//import linkArrow from '../../assets/images/link_arrow.svg'
import linkArrow from '../../assets/images/link_arrow_1.svg'
import styles from './Links.module.scss'

const Links = () => {
  return (
    <section className={styles.container}>
      <div className={styles.links__wrapper}>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
        <div className={styles.links__container}>
          <a
            className={styles.links}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.links__body}>
              link
              <Image
                className={styles.links__body_arrow}
                src={linkArrow}
                alt="arrow"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Links

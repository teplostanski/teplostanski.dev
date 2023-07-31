import data from '../../data.json'
import styles from './Skills.module.scss'

const Skills = () => {
  const skills = data.skills
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <div className={styles.wrapper}>
          {skills.map((item, index) => (
            <div key={index} className={styles.skills}>
              <picture className={styles.picture}>
                <source
                  srcSet={`https://cdn.simpleicons.org/${item}/white`}
                  type="image/svg"
                />
                <img
                  className={styles.image}
                  src={`https://cdn.simpleicons.org/${item}/white`}
                  alt="Landscape picture"
                />
              </picture>
              <span className={styles.text}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

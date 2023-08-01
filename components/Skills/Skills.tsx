/* eslint-disable react/jsx-key */
import { nanoid } from 'nanoid'
import data from '../../data.json'
import styles from './Skills.module.scss'

const Skills = () => {
  const skills = data.skills

  const setTitle = (title: string) => {
    if (title === 'langs') {
      return 'Языки программирования'
    } else if (title === 'frontend') {
      return 'Frontend технологии'
    } else if (title === 'backand') {
      return 'Backend технологии'
    } else if (title === 'db') {
      return 'Базы данных'
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <div className={styles.wrapper}>
          {skills.map((item) =>
            Object.entries(item).map(([key, values]) => (
              <div key={nanoid()} className={styles.skills}>
                <h3 className={styles.title}>{setTitle(key)}</h3>
                <div className={styles.techs}>
                  {values.map((value) => (
                    <div key={nanoid()} className={styles.item}>
                      <picture className={styles.picture}>
                        <source
                          srcSet={`https://cdn.simpleicons.org/${value}/white`}
                          type="image/svg"
                        />
                        <img
                          className={styles.image}
                          src={`https://cdn.simpleicons.org/${value}/white`}
                          alt="Landscape picture"
                        />
                      </picture>
                      <span className={styles.text}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills

//values.map((value) => (

//))

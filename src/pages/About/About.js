import './About.css';
import PastText from '../../components/PastText/PastText';
import AboutSkillItem from '../../components/AboutSkillItem/AboutSkillItem';
import AboutEduItem from '../../components/AboutEduItem/AboutEduItem';

export default function About() {
  return (
    <div className="about">
      <div className="top-section">
        <p className="about__subheading">
          Привет, меня зовут <span>Игорь Теплостанский</span>
        </p>
        <h2 className="about__heading heading-color">Я Веб Разработчик</h2>
        <div className="about__info">
          <PastText>
            Мне всегда нравилось интернет-искусство, особенно net-art. И желание
            создавать нечто похожее привело меня в Веб-разработку. Именно
            поэтому стремлюсь к профессиональному росту и развитию в сфере
            Front-end.
          </PastText>
          <PastText>
            В свободное время люблю кастомить GNU/Linux и изучать терминальные
            утилиты. <br /> Готов просидеть не одни сутки, изучая задачу, пока
            не решу ее.
          </PastText>
        </div>
      </div>
      <div className="about__info__item">
        <h1 className="about__info__heading heading-color">Навыки</h1>

        <AboutSkillItem
          title="FrontEnd"
          skillItems={[
            'HTML',
            'CSS',
            'SCSS',
            'JavaScript',
            'TypeScript',
            'React.js',
            'Astro.js',
            'Vite.js',
            'MobX',
            'Webpack',
            'Gulp',
          ]}
        />
        <AboutSkillItem
          title="BackEnd"
          skillItems={['Node.js', 'Express.js', 'MongoDB']}
        />
      </div>
      <div className="about__info__items">
        <div className="about__info__item">
          <h1 className="about__info__heading heading-color">Обучение</h1>
          <AboutEduItem
            title="Курсы"
            eduItems={['Яндекс.Практикум Факультет "Веб Разработчик"']}
          />
          <AboutEduItem
            title="Колледж"
            eduItems={[
              'Педагогический колледж "Преподаватель информатики начальных классов"',
            ]}
          />
        </div>
      </div>
    </div>
  );
}

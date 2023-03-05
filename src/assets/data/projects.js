import { v4 as uuidv4 } from 'uuid';
import howToLearn from '../images/how-to-learn.png';
import movies from '../images/movies.png';
import mesto from '../images/mesto.png';
import travel from '../images/travel.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Movies Explorer',
    techs: 'HTML CSS BEM Adaptive ReactJS',
    desc: 'Данное вeб-приложение является сайтом-портфолио и мини-кинопоиском, открывающимся после регистрации.',
    img: movies,
    site: '',
    source: 'https://github.com/r0bomurlok/movies-explorer-frontend',
  },
  {
    id: uuidv4(),
    name: 'Место',
    techs: 'HTML CSS BEM Adaptive ReactJS',
    desc: '"Mesto" — это сайт, где люди обмениваются фотографиями. "Местом" может быть что угодно: город, область или какое-то заведение.',
    img: mesto,
    site: 'https://r0bomurlok.github.io/react-mesto-auth/',
    source: 'https://github.com/r0bomurlok/react-mesto-auth',
  },
  {
    id: uuidv4(),
    name: 'Путешествие по России',
    techs: 'HTML CSS BEM Adaptive',
    desc: 'Адаптивная веб-страница "Путешествия по России", описывающая необыкновенные места России.',
    img: travel,
    site: 'https://r0bomurlok.github.io/travel/',
    source: 'https://github.com/r0bomurlok/travel',
  },
  {
    id: uuidv4(),
    name: 'Научиться учиться',
    techs: 'HTML CSS BEM',
    desc: 'Это одноcтраничный сайт о современных и эффективных подходов к обучению.',
    img: howToLearn,
    site: 'https://r0bomurlok.github.io/how-to-learn/index.html',
    source: 'https://github.com/how-to-learn',
  },
];

export default projects;

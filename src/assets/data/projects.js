import { v4 as uuidv4 } from 'uuid';
import howToLearn from '../images/how-to-learn.png';
import movies from '../images/movies.png';
import mesto from '../images/mesto.png';
import travel from '../images/travel.png';
import aned from '../images/aned.png';
import portfolio from '../images/portfolio.png';

const projects = [
  {
    id: uuidv4(),
    name: 'aned',
    techs: 'HTML CSS TypeScript React.js',
    desc: 'Пет-проект. Онлайн редактор markdown-заметок',
    img: aned,
    site: 'https://aned.teplostanski.dev/',
    source: 'https://github.com/teplostanski/aned',
  },
  {
    id: uuidv4(),
    name: 'Портфолио',
    techs: 'HTML CSS BEM Adaptive React.js',
    desc: 'Сайт-портфолио',
    img: portfolio,
    site: 'https://teplostanski.dev/',
    source: 'https://github.com/teplostanski/portfolio',
  },
  {
    id: uuidv4(),
    name: 'Movies Explorer',
    techs: 'HTML CSS BEM Adaptive React.js',
    desc: 'Данное вeб-приложение является сайтом-портфолио и мини-кинопоиском, открывающимся после регистрации.',
    img: movies,
    site: '',
    source: 'https://github.com/teplostanski/movies-explorer-frontend',
  },
  {
    id: uuidv4(),
    name: 'Место',
    techs: 'HTML CSS BEM Adaptive React.js',
    desc: '"Mesto" — это сайт, где люди обмениваются фотографиями. "Местом" может быть что угодно: город, область или какое-то заведение.',
    img: mesto,
    site: 'https://teplostanski.github.io/react-mesto-auth/',
    source: 'https://github.com/teplostanski/react-mesto-auth',
  },
  {
    id: uuidv4(),
    name: 'Путешествие по России',
    techs: 'HTML CSS BEM Adaptive',
    desc: 'Адаптивная веб-страница "Путешествия по России", описывающая необыкновенные места России.',
    img: travel,
    site: 'https://teplostanski.github.io/travel/',
    source: 'https://github.com/teplostanski/travel',
  },
  {
    id: uuidv4(),
    name: 'Научиться учиться',
    techs: 'HTML CSS BEM',
    desc: 'Это одноcтраничный сайт о современных и эффективных подходов к обучению.',
    img: howToLearn,
    site: 'https://teplostanski.github.io/how-to-learn/index.html',
    source: 'https://github.com/teplostanski/how-to-learn',
  },
];

export default projects;

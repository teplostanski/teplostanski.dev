import FooterColumns from '../FooterColumns/FooterColumns';
import love from '../../assets/images/love.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__items footer__site-map">
          <FooterColumns
            heading="Карта Сайта"
            links={[
              {
                type: 'Link',
                title: 'Обо мне',
                path: '/',
              },
              {
                type: 'Link',
                title: 'Мои проекты',
                path: '/projects',
              },
            ]}
          />
        </div>
        <div className="footer__items footer__contacts">
          <FooterColumns
            heading="Контакты"
            links={[
              {
                title: 'teplostanski@yandex.ru',
                path: 'mailto:teplostanski@yandex.ru',
              },
            ]}
          />
        </div>
        <div className="footer__items footer__links">
          <FooterColumns
            heading="Ссылки"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/teplostanski',
              },
              {
                title: 'Habr Карьера',
                path: 'https://career.habr.com/teplostanski1',
              },
              {
                title: 'HH.ru',
                path: 'https://hh.ru/resume/b8fc6622ff0b63a4dd0039ed1f68396a53684e',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-38ab67254',
              },
              {
                title: 'Habr',
                path: 'https://habr.com/ru/users/teplostanski/',
              },
              {
                title: 'StackOverflow',
                path: 'https://stackoverflow.com/users/21089931/teplostanski',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <p className="copyright__text">
          © 2022-2023 - Сделано с{' '}
          <img className="copyright__icon" src={love} alt="любовью" /> Игорем
          Теплостанским
        </p>
      </div>
    </div>
  );
}

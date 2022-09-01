import FooterColumns from '../FooterColumns/FooterColumns';
import love from '../../assets/images/love.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__col2">
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
        <div className="footer__col3">
          <FooterColumns
            heading="Контакты"
            links={[
              {
                title: 'teplostanski@yandex.ru',
                path: 'mailto:teplostanski@yandex.ru',
              },
              {
                title: 'igrtnsk@jabber.ru',
                path: 'https://jabber.ru',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumns
            heading="Ссылки"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/r0bomurlok',
              },
              {
                title: 'Habr Карьера',
                path: 'https://',
              },
              {
                title: 'HH.ru',
                path: 'https://hh.ru',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <p className="copyright__text">
          © 2022 - Made with{' '}
          <img className="copyright__icon" src={love} alt="love" /> by Игорь
          Теплостанский
        </p>
      </div>
    </div>
  );
}

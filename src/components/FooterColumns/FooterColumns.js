import { Link } from 'react-router-dom';
import './FooterColumns.css';

export default function FooterColumns({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Обо мне',
      path: '/',
    },
  ],
}) {
  return (
    <div>
      <h2 className="heading heading-color">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

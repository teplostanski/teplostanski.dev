import { Link } from 'react-router-dom';
import ProjectImg from '../../assets/images/projectImg.jpg';
import './ProjectItem.css';

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Example description',
  site = 'https://example.com',
  source = 'https://example.com',
  siteText = 'Сайт',
  sourceText = 'Код',
}) {
  return (
    <div>
      <Link to="/projects" className="project-item__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="project-item__links">
        <a
          className="project-item__link"
          href={site}
          alt="site"
          target="_blank"
          rel="noreferrer"
        >
          {siteText}
        </a>
        <a
          className="project-item__link project-item__link_outline"
          href={source}
          target="_blank"
          rel="noreferrer"
          alt="source"
        >
          {sourceText}
        </a>
      </div>
      <div className="project-item__info">
        <h3 className="project-item__title">{title}</h3>
        <p className="project-item__desc">{desc}</p>
      </div>
    </div>
  );
}

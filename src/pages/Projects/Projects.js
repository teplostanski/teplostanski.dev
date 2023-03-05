import { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectsInfo from '../../assets/data/projects';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import './Projects.css';

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };
  return (
    <div className="projects">
      <SectionTitle heading="Проекты" subheading="мои недавние работы" />
      <div className="projects__searchBar">
        <form>
          <input
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder="Название проекта"
          />
          <MdSearch className="searchIcon" />
        </form>
      </div>
      <div className="projects__allItems">
        {projectsData.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.name}
            techs={item.techs}
            desc={item.desc}
            img={item.img}
            site={item.site}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
}

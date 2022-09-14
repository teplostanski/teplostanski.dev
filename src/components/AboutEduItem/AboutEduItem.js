import './AboutEduItem.css';

export default function AboutSkillItem({
  title = 'Title',
  eduItems = ['HTML', 'CSS'],
}) {
  return (
    <div className="about-edu__items">
      <h1 className="title">{title}</h1>
      <div className="eduItems">
        {eduItems.map((item, index) => (
          <div className="about-edu__item" key={index}>
            <p className="text">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import './AboutSkillItem.css';
import PastText from '../PastText/PastText';

export default function AboutSkillItem({
  title = 'Title',
  skillItems = ['HTML', 'CSS'],
}) {
  return (
    <div className="about__items">
      <h1 className="title">{title}</h1>
      <div className="items">
        {skillItems.map((item, index) => (
          <div className="item" key={index}>
            <PastText>{item}</PastText>
          </div>
        ))}
      </div>
    </div>
  );
}

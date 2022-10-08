import '../AboutSkillItem/AboutSkillItem.css';

export default function AboutSkillItem({
  title = 'Title',
  eduItems = ['HTML', 'CSS'],
}) {
  return (
    <div className="about__items about__items_edu">
      <h1 className="title">{title}</h1>
      <div className="items__edu">
        {eduItems.map((item, index) => (
          <div className="item" key={index}>
            <p className="text">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

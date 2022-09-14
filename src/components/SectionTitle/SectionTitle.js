import './SectionTitle.css';

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <div className="section-title">
      <p>{subheading}</p>
      <h2 className="heading-color">{heading}</h2>
    </div>
  );
}

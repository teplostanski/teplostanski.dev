import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const { y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
  }, [y]);

  return (
    <div className="scroll-container">
      <div className="indicator" style={{ width: `${scrolled}%` }} />
    </div>
  );
};

export default ScrollIndicator;

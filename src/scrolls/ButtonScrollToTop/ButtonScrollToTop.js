import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

const ButtonScrollToTop = ({ children }) => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 600) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const buttonScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = (e) => {
    if (e.keyCode === 13) {
      buttonScrollToTop();
    }
  };

  if (!visible) {
    return false;
  }

  return (
    <div
      onClick={buttonScrollToTop}
      onKeyDown={scrollToTop}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
};

export default ButtonScrollToTop;

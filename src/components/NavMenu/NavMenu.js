import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import './NavMenu.css';

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  const openMenu = () => setShowNav(!showNav);

  const openMenuOnKeyDown = (e) => {
    if (e.keyCode === 27) {
      openMenu();
    }
  };

  return (
    <div className="nav">
      <div
        className="nav__burger-button"
        onClick={openMenu}
        role="button"
        onKeyDown={openMenuOnKeyDown}
        tabIndex="0"
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? 'nav__items nav__items_hide' : 'nav__items'}>
        <div
          className="nav__close-button"
          onClick={openMenu}
          role="button"
          onKeyDown={openMenuOnKeyDown}
          tabIndex="0"
        >
          <MdClose />
        </div>
        <li className="nav__item">
          <NavLink
            to="/about"
            onClick={openMenu}
            role="button"
            onKeyDown={openMenuOnKeyDown}
            tabIndex="0"
          >
            Обо мне
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/projects"
            onClick={openMenu}
            role="button"
            onKeyDown={openMenuOnKeyDown}
            tabIndex="0"
          >
            Мои проекты
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

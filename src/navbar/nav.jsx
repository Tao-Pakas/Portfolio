import React from 'react';
import style from './nav.module.css';

function Nav() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li onClick={() => scrollToSection('home')} className={style.li}>Home</li>
        <li onClick={() => scrollToSection('about')} className={style.li}>About</li>
        <li onClick={() => scrollToSection('services')} className={style.li}>Services</li>
        <li onClick={() => scrollToSection('skills')} className={style.li}>Skills</li>
        <li onClick={() => scrollToSection('projects')} className={style.li}>Projects</li>
        <li onClick={() => scrollToSection('contact')} className={style.li}>Contact Me</li>
      </ul>
    </nav>
  );
}

export default Nav;

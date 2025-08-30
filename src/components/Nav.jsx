import React from 'react';

const Nav = ({ theme, toggleTheme }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <div className="logo">M</div>
      <ul className="nav-list">
        <li className="nav-item" onClick={() => scrollToSection('home')}>
          Home
        </li>
        <li className="nav-item" onClick={() => scrollToSection('about')}>
          About
        </li>
        <li className="nav-item" onClick={() => scrollToSection('work')}>
          Projects
        </li>
        <li className="nav-item" onClick={() => scrollToSection('contact')}>
          Contact
        </li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Nav;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {

  const navItems = props.sections.map((section, idx) => {
    return (
      <NavLink to={idx === 4 ? `${section.path}/1` : section.path} key={idx}>
        <ul>{section.label}</ul>
      </NavLink>
    )
  });


  return (
    <nav>
      {navItems}
    </nav>
  )
};

export default Nav;
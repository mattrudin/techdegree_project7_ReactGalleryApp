import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
    <nav className="main-nav">
        <ul>
          <li><NavLink to='/search/avocado'>Avocado</NavLink></li>
          <li><NavLink to='/search/cats'>Cats</NavLink></li>
          <li><NavLink to='/search/acai-bowl'>Acai Bowl</NavLink></li>
        </ul>
      </nav>
);

export default Navigation;
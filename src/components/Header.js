import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to='/' activeClassName='menu-selected'>Home Page</NavLink>
    <NavLink exact to='/create' activeClassName='menu-selected'>Create</NavLink>
    <NavLink exact to='/edit' activeClassName='menu-selected'>Edit</NavLink>
    <NavLink exact to='/help' activeClassName='menu-selected'>Help</NavLink>
  </header>
);

export default Header;

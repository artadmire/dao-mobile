import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
function Menu(props) {
  return (
    <div className="Menu">
       <p><NavLink className="navtab" to='/'>Welcome</NavLink></p>
       <p><NavLink className="navtab" to='/about'>About</NavLink></p>
       <p><NavLink className="navtab" to='/account'>Account</NavLink></p>
    </div>
  );
}

export default Menu;
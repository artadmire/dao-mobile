import React from 'react'
import './index.css'
import { NavLink,withRouter } from 'react-router-dom'

function Menu(props) {
  const {onChange} = props
  function hideMenu() {
    typeof onChange === 'function' && onChange(false)
  }
  return (
    <div className="Menu">
       <NavLink exact className="navtab" onClick={hideMenu} to='/'>Welcome</NavLink>
       <NavLink className="navtab" onClick={hideMenu} to='/about'>About</NavLink>
       <NavLink className="navtab" onClick={hideMenu} to='/account'>Account</NavLink>
    </div>
  );
}

export default withRouter(Menu);
import React from 'react'
import whiteMenu from '@/assets/img/menu@2x2.png'
import close from '@/assets/img/delete2.png'
import imgURL from '@/assets/img/logo3x.png';
import './index.css'
import {  withRouter } from 'react-router-dom'

 function Header(props) {
  const {history, onChange, showMenu} = props;
  
  function showMenus() {
    typeof onChange === 'function' && onChange(true)
  }
  function hideMenu() {
    typeof onChange === 'function' && onChange(false)
  }
  function goHome(){
    history.push('/')
  }
    return (
        <header  className="header">
          <p onClick={goHome}><img src={imgURL}/><span>DAOStarter</span></p>
          <span className="unlock-wallet">Unlock Wallet</span>
          {showMenu ? <img onClick={hideMenu} src={close}/>
          : <img onClick={showMenus} src={whiteMenu}/>}
        </header>
    )
}

export default  withRouter(Header)

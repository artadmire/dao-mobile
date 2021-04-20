import React from 'react'
import whiteMenu from '@/assets/img/menu@2x2.png'
import close from '@/assets/img/delete2.png'
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
        <header style={{background: '#fff'}} className="header">
          <h2 onClick={goHome}><span>D</span><span>DAOStarter</span></h2>
          <span className="unlock-wallet">Unlock Wallet</span>
          {showMenu ? <img onClick={hideMenu} src={close}/>
          : <img onClick={showMenus} src={whiteMenu}/>}
        </header>
    )
}

export default  withRouter(Header)

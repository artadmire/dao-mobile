import React,{useState} from 'react'
import menu from '../../assets/img/menu@2x.png'
import whiteMenu from '../../assets/img/menu@2x 2.png'
import close from '../../assets/img/delete2.png'
import { NavLink, withRouter } from 'react-router-dom'

 function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const tabKey =1;
  const {history} = props;
  function handleClick() {
    setShowMenu(false)
  }
  function showMenus() {
    setShowMenu(true)
  }
  function hideMenu() {
    setShowMenu(false)
    window.history.go(-1)
  }
  function goHome(){
    history.push('/')
  }
    return (
        <header>
          <h2 onClick={goHome}><span>D</span><span>DAOStarter</span></h2>
          <span className="unlock-wallet">Unlock Wallet</span>
          {!showMenu ? 
          <NavLink to='/menu'>          <img onClick={showMenus} src={ tabKey === '1' ?menu : whiteMenu}/> 
          </NavLink>
          : <img onClick={hideMenu} src={close}/>}
        </header>
    )
}

export default  withRouter(Header)

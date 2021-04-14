import React,{useState} from 'react'
import menu from '../../assets/img/menu@2x.png'
import whiteMenu from '../../assets/img/menu@2x 2.png'
import close from '../../assets/img/delete2.png'
export default function Header(props) {
  console.log("props",props)
  const [showMenu, setShowMenu] = useState(false);
  const tabKey =1;
  function handleClick() {
    setShowMenu(false)
  }
  function showMenus() {
    setShowMenu(true)
  }
  function hideMenu() {
    setShowMenu(false)
  }

    return (
        <header>
          <h2><span>D</span><span>DAOStarter</span></h2>
          <span className="unlock-wallet">Unlock Wallet</span>
          {!showMenu ? <img onClick={showMenus} src={ tabKey === '1' ?menu : whiteMenu}/> : <img onClick={hideMenu} src={close}/>}
        </header>
    )
}

import React, {useState} from 'react'
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Fud from './pages/fud'
import Menu from './pages/menu'
import Contact from './pages/contact'
import 'antd/dist/antd.css';
import menu from './assets/img/menu@2x.png'
import whiteMenu from './assets/img/menu@2x 2.png'
import close from './assets/img/delete2.png'



const appClass = {
  1: 'appBg',
  2: 'aboutBg',
  3: 'fudBg',
  4: 'contactBg'
}

function App() {
  const [tabKey, setTabkey] = useState('1');
  const [showMenu, setShowMenu] = useState(false);

  function handleClick(key) {
    setTabkey(key)
    setShowMenu(false)
  }
  function showMenus() {
    setShowMenu(true)
  }
  function hideMenu() {
    setShowMenu(false)
  }
  function goAbout(key) {
    setTabkey(key)
  }
  function goHome() {
    setTabkey('1')
    showMenu && setShowMenu(false)

  }
  return (
    <div className={`App ${appClass[tabKey]}`}>
        <div className="content">
        <header>
          <h2 onClick={goHome} className={tabKey !== '1' ? 'blackBj' : ''}></h2>
          <span className="unlock-wallet">Unlock Wallet</span>
          {!showMenu ? <img onClick={showMenus} src={ tabKey === '1' ?menu : whiteMenu}/> : <img onClick={hideMenu} src={close}/>}
        </header>
        {showMenu && <Menu myKey={tabKey} onHandelClcik={handleClick} />}
        {!showMenu && tabKey === '1' && <Home handleClick={goAbout} />}
        {!showMenu && tabKey === '2' && <About />}
        {!showMenu && tabKey === '3' && <Fud />}
        {!showMenu && tabKey === '4' && <Contact />}
      </div>
    </div>
  );
}

export default App;

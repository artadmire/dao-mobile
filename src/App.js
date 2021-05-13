import React, {useState, useEffect} from 'react'
import './reset.css'
import './App.css';
import Header from './components/header/index.js'
import Home from './pages/home'
import About from './pages/about'
import Apply from './pages/apply'
import Menu from './components/menu'
import Account from './pages/account'
import Parameter from  './pages/parameter'
import PreviousList from  './pages/previous/index'
import 'antd/dist/antd.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import ctx from './events';
import './events/ethereum';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function changeShow(value) {
    setShowMenu(value)
  }
  useEffect(() => {
    connectWallet()
  }, [])

  const connectWallet = () => {
    const { chainAccount } = ctx.data;
    if (chainAccount) {
      return;
    }
    ctx.event.emit('connectWallet');
  }
  return (
    <div className="App" id="boxbg">
        <div className="content">
          <HashRouter >
            <Header showMenu={showMenu} onChange={changeShow}/>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/account" component={Account}></Route>
              <Route path="/apply" component={Apply}></Route>
              <Route path="/project-list" component={PreviousList}></Route>
              <Route path="/parameter/:ID" component={Parameter}></Route>
              <Redirect to='/'/>
            </Switch>
            {showMenu ? <Menu onChange={changeShow}/> : null}
          </HashRouter>
      </div>
    </div>
  );
}

export default App;

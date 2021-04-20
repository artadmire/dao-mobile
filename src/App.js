import React, {useState} from 'react'
import './reset.css'
import './App.css';
import Header from './components/header/index.js'
import Home from './pages/home'
import About from './pages/about'
import Menu from './components/menu'
import Parameter from  './pages/parameter'
import PreviousList from  './pages/previous/index'
import 'antd/dist/antd.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function changeShow(value) {
    setShowMenu(value)
  }
  return (
    <div className="App" id="boxbg">
        <div className="content">
          <HashRouter >
            <Header showMenu={showMenu} onChange={changeShow}/>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/account" component={Parameter}></Route>
              <Route path="/project-list" component={PreviousList}></Route>
              <Route path="/parameter" component={Parameter}></Route>
              <Redirect to='/'/>
            </Switch>
            {showMenu ? <Menu onChange={changeShow}/> : null}
          </HashRouter>
      </div>
    </div>
  );
}

export default App;

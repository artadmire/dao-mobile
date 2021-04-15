import React, {useState} from 'react'
import './reset.css'
import './App.css';
import Header from './components/header/index.js'
import Home from './pages/home'
import About from './pages/about'
import Menu from './pages/menu'
import Parameter from  './pages/parameter'
import PreviousList from  './pages/previous/index'
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
        <div className="content">
          <BrowserRouter >
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/account" component={Parameter}></Route>
              <Route path="/project-list" component={PreviousList}></Route>
              <Route path="/menu" component={Menu}></Route>
            </Switch>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

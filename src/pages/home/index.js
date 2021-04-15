import React from 'react'
import './index.css'
import MyBottom from '../../components/myBottom'
import UpcomingProject from './components/upcomingProjects/index.js'
import PreviousProject from './components/previousProjects/index.js'
import {NavLink} from 'react-router-dom'
function Home(props) {
  function handleClick() {
    const { onHandleClick } = props
    typeof onHandleClick === 'function' && onHandleClick()
  }
  return (
    <div className="home">
      <div className="des">
        <div className="title">DAOStarter</div>
        <div className="title1">The Booster for Crypto Projects</div>
      </div>
      <div className="home-bg">
        <div className="title2">Providing the access to funding blockchain projects</div>
        <div className="main-title upcoming-title">Upcoming Projects</div>
      </div>
       <UpcomingProject/>
       <PreviousProject/>
       <div className="user-applay">
         <img src  style={{width:"112px",height:"24px",background:"red"}}/>
        <div className="title">
          Start your dream on
        </div>
        <div className="title title2">
          DAOStarter ?
        </div>
        <NavLink to='/apply' className="start">APPLY HERE</NavLink>
       </div>
      <MyBottom className="home-bottom"/>
    </div>
  );
}

export default Home;
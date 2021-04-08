import React from 'react'
import './index.css'
import MyBottom from '../../components/myBottom'
import UpcomingProject from './components/upcomingProjects/index.js'
import PreviousProject from './components/previousProjects/index.js'
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
        <div className="title2">Providing the access to funding blockchain projects</div>
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
        <span onClick={handleClick} className="start">APPLY HERE</span>
       </div>
      <MyBottom className="home-bottom"/>
    </div>
  );
}

export default Home;
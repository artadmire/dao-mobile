import React from 'react'
import './index.css'
import MyBottom from  '../../components/myBottom'
import Info from './components/info'
import Investor from './components/investors'

function About() {
  return (
    <div className="my-about">
     
        <div className="contents">
        <div>
          <p className="desc">
               DAOStarter is a public token launchpad, a service platform for crypto projects.
          </p>
          <p className="desc">
               It will act as the final bridge between early-stage projects and the community before the project goes fully public.            
          </p>
          <p className="desc">
              DAOStarter has an unique level system which requires users to lock-in a certain amount of DST tokens to participate in the launch platform.
           </p>
          <p className="desc">
            As a service platform, DAOStarter will also offer several KYC options for upcoming projects.         
         </p>
        </div>
        <Info/>
        <Investor/>
      </div>
      <MyBottom className="my-about-bottom"/>
    </div>
  );
}

export default About;
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
          DAOStarter is a public token launchpad, serving for crypto inveestors & projects.
          </p>
          <p className="desc">
          DAOStarter is deployed on BSC, Ethereum and HECO, and cross-chain bridge will be developed to swap assets between different chains.
          </p>
          <p className="desc">
          As the final bridge bettween early-stage projects and the crypto community, DAOStarter will pay more attentions on project research & value evaluation to reduce the risk of investors.
           </p>
          <p className="desc">
            An unique investors rating system is adopted based on the lock-in amounts of DST tokens in smart contract.  Besides, KYC & whitelist is also offered for investors.
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
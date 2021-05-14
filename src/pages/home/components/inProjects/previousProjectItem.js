import React from 'react'
import './previousProjectItem.css'
import {NavLink} from 'react-router-dom'
const chainMap = {
    1: 'ETH-Network',
    128: 'HECO-Network',
    70: 'HSC-Network',
    56: 'BSC-Network'
}
export default function PreviousProjectItem(props) {
    const { data = {}, account } = props;
    const { name = '', logo = '', offerAddress = '', dtokenAddress = '', method = '', deposit = '', earn = '', totalDeposited = '', available = '', status, poolID = '', chainID = ''} = data || {}
    function handleClick () {
        window.offerAddress = offerAddress
        window.dtokenAddress = dtokenAddress
      }
    return (
        <NavLink to={'/parameter/' + poolID} onClick={handleClick} className="previous-project-item-wrap">
        <div className="previous-project-item" >
           <div className="section1">
                <img src={logo}/>
                <span>{name}</span>
           </div>
           <div className="border-top"></div>
           <ul className="section2">
       <li>
           <div>Chain</div>
           <div>{chainMap[chainID]}</div>
       </li>
       <li>
          <div>Method</div>
          <div>{method}</div>
        </li>
        <li>
          <div>Deposit</div>
          <div>{deposit}</div>
        </li>
        <li>
          <div>Earn</div>
          <div>{earn}</div>
        </li>
           </ul>
           <div className="border-top"></div>
            <div className="section3">
            <ul>
            <li>
          <div>Total USDT deposited</div>
          <div>{totalDeposited}</div>
        </li>
        <li>
          <div>{earn}s available</div>
          <div>{available}</div>
        </li>
        <li>
          <div>Status</div>
          <div>{status ? 'open' : 'over'}</div>
        </li>
                </ul>
            </div>
            <div className="section4">
                <span className="unlock-wallet">{account ? 'Enter' : 'Unlock Wallet'}</span>
            </div>
        </div>
        </NavLink>
    )
}

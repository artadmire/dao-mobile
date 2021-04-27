import React  from 'react'
import PreviousProjectItem from './previousProjectItem.js'
import './index.css'
import arrow from '../../../../assets/img/arrow@2x.png'
import {Link}  from 'react-router-dom'
export default function PreviousProject(props) {
    const {list, account} = props
    return (
        <div className="previous-projects">
         <div className="main-title">
             Previous Objects
         </div>
         <div className="previous-projects-content">
                {
                   list.length && list.map((item,index)=>  <PreviousProjectItem account={account} key={index} data={item} styles={{"marginRight":"0"}}/>)
                }
         </div>
         <Link className="show-all" to="/project-list">
            <span>Show all previous projects</span><img src={arrow}/>
         </Link>
        </div>
    )
}

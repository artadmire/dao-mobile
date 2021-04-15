import React,{useState} from 'react'
import PreviousProjectItem from './previousProjectItem.js'
import './index.css'
import arrow from '../../../../assets/img/arrow@2x.png'
import {Link}  from 'react-router-dom'
export default function PreviousProject() {
    let [PreviousProjects] = useState([0,1,2,0,1,2])
    return (
        <div className="previous-projects">
         <div className="main-title">
             Previous Objects
         </div>
         <div className="previous-projects-content">
                {
                   PreviousProjects.length&& PreviousProjects.slice(3,6).map((index,item)=>  <PreviousProjectItem key={index} styles={{"marginRight":"0"}}/>)
                }
         </div>
         <Link className="show-all" to="/project-list">
                  
                   <span>Show all previous projects</span><img src={arrow}/>
                     
         </Link>
        </div>
    )
}

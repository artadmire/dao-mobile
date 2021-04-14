import React,{useState} from 'react'
import PreviousProjectItem from './previousProjectItem.js'
import './index.css'
import arrow from '../../../../assets/img/arrow@2x.png'
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
         <div className="show-all">
                   <span>Show all previous projects</span><img src={arrow}/>
                     
         </div>
        </div>
    )
}

import React ,{useState}from 'react'
import UpcomingProjectItem from './upComingProjectItem.js'
import './index.css'
function UpcomingProject() {
    let [upcomingProjects] = useState([0,1,2,4,5,6,7,8])
    return (
        <div className="upcoming-projects">
      
         <div className="main-title">Upcoming Projects</div>
        <div className="upcoming-projects-content">
        {
                     upcomingProjects.slice(2).map((index,item)=> <UpcomingProjectItem key={index}/>)
                     }
        </div>
        </div>
    )
}

 export default UpcomingProject
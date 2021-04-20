import React from 'react'
import UpcomingProjectItem from './upComingProjectItem.js'
import './index.css'
function UpcomingProject(props) {
    const {list} = props
    return (
        <div className="upcoming-projects">
            <div className="upcoming-projects-content">
            {
                list.map((item,index)=> <UpcomingProjectItem key={index} data={item}/>)
            }
            </div>
        </div>
    )
}

 export default UpcomingProject
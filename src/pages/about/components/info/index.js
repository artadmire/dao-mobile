import React, { useState } from 'react'
import './index.css'
import {listA} from './constant'
export default function Info() {
    const [list] = useState(listA)
    return (
        <div className="info">
            {
                list.map((item,index)=>{
                 return(

                    <a href="javascript:;" key={index} className="info-item">
                         <img  src={item.imgUrl}/>
                         <p>{item.text}</p>
                    </a>
                 )  
                })
            }
        </div>
    )
}

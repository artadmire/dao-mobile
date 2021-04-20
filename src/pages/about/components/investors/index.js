import React ,{useState}from 'react'
import './index.css'
import {listA} from './constant'

export default function Investor() {
    const [list] = useState(listA)
    return (
        <div className="investor">
              <p className="investor-title">investors</p>
              <div  className="investor-content">
                 {
                     list.map((item,index)=>{
                        return(
       
                           <a  href="javascript:;" key={index} className="investor-item">
                                <img  src={item.imgUrl}/>
                                <p>Cross-chain Swaps</p>
                           </a>
                        )  
                       })
                 }
              </div>
        </div>
    )
}

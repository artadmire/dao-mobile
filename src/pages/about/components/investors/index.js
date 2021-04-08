import React ,{useState}from 'react'
import './index.css'
import  CrossChainSwaps  from '../../../../assets/img/Cross-chain Swaps@2x.png'

export default function Investor() {
    const [list] = useState([1,2,5,6])
    return (
        <div className="investor">
              <p className="investor-title">investors</p>
              <div  className="investor-content">
                 {
                     list.map((index,item)=>{
                        return(
       
                           <div className="investor-item">
                                <img  src={CrossChainSwaps}/>
                                <p>Cross-chain Swaps</p>
                           </div>
                        )  
                       })
                 }
              </div>
        </div>
    )
}

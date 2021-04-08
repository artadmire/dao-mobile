import React,{useState} from 'react'
import './index.css'
import  CrossChainSwaps  from '../../../../assets/img/Cross-chain Swaps@2x.png'
export default function Info() {
    const [list] = useState([1,2,5,6,7,78,9,9])
    return (
        <div className="info">
            {
                list.map((index,item)=>{
                 return(

                    <div className="info-item">
                         <img  src={CrossChainSwaps}/>
                         <p>Cross-chain Swaps</p>
                    </div>
                 )  
                })
            }
        </div>
    )
}

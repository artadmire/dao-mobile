import React, { useState } from 'react'
import './index.css'
const listA  = [
    {
      text: 'Cross-chain Swaps',
      imgUrl: 'https://daostarter.oss-cn-hangzhou.aliyuncs.com/Cross-chainSwaps%402x.png'
    },
    {
      text: 'Fixed and Dynamic Swaps',
      imgUrl: 'https://daostarter.oss-cn-hangzhou.aliyuncs.com/FixedandDynamicSwaps%402x.png'
    },
    {
      text: 'Anti-scam Features',
      imgUrl: 'https://daostarter.oss-cn-hangzhou.aliyuncs.com/Anti-scamFeatures%402x.png'
    },
    {
      text: 'Full KYC Integration',
      imgUrl: 'https://daostarter.oss-cn-hangzhou.aliyuncs.com/FullKYCIntegration%402x.png'
    },
    {
      text: 'Governance Model',
      imgUrl: 'https://daostarter.oss-cn-hangzhou.aliyuncs.com/GovernanceModel%402x.png'
    },
    {
      text: 'Permissionless Listing',
      imgUrl: 'https://daostarter.oss-cn-hangzhou.aliyuncs.com/PermissionlessListing%402x.png'
    },
  ]
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

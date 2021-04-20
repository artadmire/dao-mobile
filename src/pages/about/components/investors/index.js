import React ,{useState}from 'react'
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
    // {
    //   text: 'Governance Model',
    //   imgUrl: 'https://daostarter.oss-cn-hangzhou.aliyuncs.com/GovernanceModel%402x.png'
    // },
    // {
    //   text: 'Permissionless Listing',
    //   imgUrl: 'https://daostarter.oss-cn-hangzhou.aliyuncs.com/PermissionlessListing%402x.png'
    // },
  ]
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

import React, {useState} from 'react'
import './index.css'
import MyBottom from  '../../components/myBottom'


function Fud() {
  const [list] = useState(['https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/matic.png',
  'https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/1inch.png',
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/aave.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/dot.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/ksm.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/mdx.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/near.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/plm.png"])
  return (
    <div className="Fud">
        <div className="content">
        {
          list.map((item, index) => <a href="javascript:;" key={index} ><img src={item}/></a>)
        }
        </div>
      <MyBottom className="Fud-bottom"/>
    </div>
  );
}

export default Fud;
import React, {useState} from 'react'
import './index.css'
import MyBottom from  '../../components/myBottom'
import Info from './components/info'
import Investor from './components/investors'
function About() {
  const [tabKay, setTabkey] = useState('1');
  const [list] = useState(['https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/matic.png',
  'https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/1inch.png',
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/aave.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/dot.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/ksm.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/mdx.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/near.png",
  "https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/plm.png"])

  function handleChange(key) {
    setTabkey(key)
  }
  return (
    <div className="my-about">
      {tabKay === '1' && <>
        <div className="contents">
        <div>
          <p className="desc">
               DAOStarter is a public token launchpad, a service platform for crypto projects.
          </p>
          <p className="desc">
               It will act as the final bridge between early-stage projects and the community before the project goes fully public.            
          </p>
          <p className="desc">
              DAOStarter has an unique level system which requires users to lock-in a certain amount of DST tokens to participate in the launch platform.
           </p>
          <p className="desc">
     
           As a service platform, DAOStarter will also offer several KYC options for upcoming projects.         
         </p>
        </div>

        <Info/>
        <Investor/>
      </div>
      </>}
      {
        tabKay === '2' &&  <div className="about-content">
        {
          list.map((item, index) => <a href="javascript:;"><img key={index} src={item}/></a>)
        }
        </div>
      }
      <MyBottom className="my-about-bottom"/>
    </div>
  );
}

export default About;
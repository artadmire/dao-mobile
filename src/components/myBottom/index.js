import React from 'react'
import './index.css'
import imgURL from '../../assets/img/logo3x.png';
import imgURL1 from '../../assets/img/twitter@2x.png';
import imgURL2 from '../../assets/img/discorf@2x.png';
import imgURL3 from '../../assets/img/medium.png';
import imgURL4 from '../../assets/img/telegram@2x.png';
import imgURL5 from '../../assets/img/email@2x.png';


function myBottom(props) {
  const { className = ''} = props
  return (
    <div className={`myBottom ${className}`}>
      <p className="terms-privacy">
          <a href="https://daostarter.oss-cn-hangzhou.aliyuncs.com/DAOSTARTER%20TERMS%20AND%20CONDITIONS.pdf" className="terms">Terms</a>
          <a  href="https://daostarter.oss-cn-hangzhou.aliyuncs.com/PRIVACY%20POLICY.pdf">Privacy</a>
      </p>
      <div className="icon">
        <a href="https://twitter.com/DaoStarter"><img src={imgURL1} /></a>
        {/* <a href="javascript:;" ><img src={imgURL2}/></a> */}
        <a href="https://medium.com/@DaoStarter"><img src={imgURL3}/></a>
        <a href="https://t.me/DaoStarter"><img src={imgURL4}/></a>
        <a href="javascript:;" title="support@daostarter.pro"><img src={imgURL5}/></a>
      </div>
      <p className="contact"><img src={imgURL} style={{width:"16px",height:"16px"}}/>DAOStarter</p>
      <p className="copy">©2021 DAOStarter. All rights reserved.</p>
    </div>
  );
}

export default myBottom;

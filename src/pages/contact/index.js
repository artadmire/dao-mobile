import React from 'react'
import './index.css'

function Contact() {
  return (
    <div className="Contact">
      <div className="card">
        <img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/weitu2x.png'/>
        <p>Contact By App</p>
        <div className="icons">
          <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/twitter%402x.png'/></p>
          <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/discord%402x.png'/></p>
          <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/medium%402x.png'/></p>
          <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/telegram%402x.png'/></p>
        </div>
      </div>
      <div className="card">
        <img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/weitu2xs.png'/>
        <p>Contact By Email</p>
        <span>contact@ffcap.com</span>
      </div>
    </div>
  );
}

export default Contact;
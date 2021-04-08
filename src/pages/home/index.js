import React from 'react'
import './index.css'
import MyBottom from '../../components/myBottom'

function Home(props) {
  function goAbout(e) {
    const { handleClick } = props
    e.preventDefault();
    typeof handleClick === 'function' && handleClick('2')
  }
  return (
    <div className="home">
      <div className="des">
        <p className="title">Building Dreams</p>
        <p>for</p>
        <p>Blockchain Entrepreneurs</p>
      </div>
      <a href="" onClick={goAbout} className="about">ABOUT  FFCAP</a>
      <MyBottom className="home-bottom"/>
    </div>
  );
}

export default Home;
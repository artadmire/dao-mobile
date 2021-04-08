import React from 'react'
import './index.css'


function Menu(props) {
  const { myKey, onHandelClcik} = props
  function handleClick(key) {
    typeof onHandelClcik === 'function' && onHandelClcik(key)
  }
  return (
    <div className="Menu">
       <p onClick={() => handleClick('1')} className={`${myKey === '1' && 'active'}`}>Welcome</p>
       <p onClick={() => handleClick('2')} className={myKey === '2' ? 'active' : ''}>About</p>
       <p onClick={() => handleClick('3')}  className={myKey === '3' ? 'active' :'' }>Investments</p>
       <p onClick={() => handleClick('4')} className={myKey === '4' ? 'active' : ''}>Contact</p>
    </div>
  );
}

export default Menu;
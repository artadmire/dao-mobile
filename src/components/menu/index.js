import React, {useState} from 'react'
import './index.css'
import { NavLink,withRouter } from 'react-router-dom'
import {changeNetwork} from '../../events/contracts/accounts'
import ComingModel from '../ComingModel'
import {connect} from 'react-redux'

const chainMap = {
  1: 'ETH',
  128: 'HECO',
  56: 'BSC'
}

function Menu(props) {
  const [show, setShow] = useState(false)

  function handlerHideModal (val) {
    setShow(val)
  }
  const {onChange} = props
  function hideMenu() {
    typeof onChange === 'function' && onChange(false)
  }
  return (
    <div className="Menu">
       <NavLink exact className="navtab" onClick={hideMenu} to='/'>Welcome</NavLink>
        <NavLink className="navtab" onClick={handlerHideModal} to='/notFind'>Bridge</NavLink>
       <NavLink className="navtab" onClick={hideMenu} to='/about'>About</NavLink>
       <NavLink className="navtab" onClick={hideMenu} to='/account'>Account</NavLink>

       <span className={`menu-span ${chainMap[props.chainId] ? '' : 'wrong'}`}>{chainMap[props.chainId] || 'Wrong NetWork'}</span>
       {show ? <ComingModel  hideModal={handlerHideModal}/> : null}
    </div>
  );
}

export default connect(({chainId}) => ({chainId}))(withRouter(Menu));

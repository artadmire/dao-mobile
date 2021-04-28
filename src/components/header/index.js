import React, {useEffect} from 'react'
import whiteMenu from '@/assets/img/menu@2x2.png'
import close from '@/assets/img/delete2.png'
import imgURL from '@/assets/img/logo3x.png';
import './index.css'
import {  withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import ctx from '../../events';
import { showInfo } from '../Modal';
import { wrongAction} from '@/store/actions'
import { store } from '@/store'

const chainMap = {
  1: 'ETH',
  128: 'HECO',
  56: 'BSC'
}
 function Header(props) {
  const {history, onChange, showMenu, account, chainId, wrong} = props;
  
  const connectWallet = () => {
    const { chainAccount } = ctx.data;
    if (chainAccount && !wrong) {
      showInfo({
        content: `Your wallet address is already connected:\n${chainAccount}`
      });
      return;
    }
    ctx.event.emit('connectWallet');
  }

  useEffect(() => {
    const wrong = !chainMap[chainId]
    store.dispatch(wrongAction(wrong))
  }, [chainId])

  function showMenus() {
    typeof onChange === 'function' && onChange(true)
  }
  function hideMenu() {
    typeof onChange === 'function' && onChange(false)
  }
  function address (account, chainId) {
    if (!account) {return 'Unlock Wallet'}
    if (chainId != 1 && chainId != 56 && chainId != 128) {return 'Wrong NetWork'}
    return account;
  }
  function goHome(){
    history.push('/')
  }
    return (
        <header  className="header">
          <p onClick={goHome}><img src={imgURL}/><span>DAOStarter</span></p>
          <span onClick={connectWallet} className={`unlock-wallet ${address(account, chainId) === 'Wrong NetWork' && 'wrong'}`} >{address(account, chainId)}</span>
          {showMenu ? <img onClick={hideMenu} src={close}/>
          : <img onClick={showMenus} src={whiteMenu}/>}
        </header>
    )
}

export default  connect(({account, chainId, wrong}) => ({account, chainId, wrong}))(withRouter(Header))

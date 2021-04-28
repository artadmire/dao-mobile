import React, {useState, useCallback, useEffect, useMemo} from 'react'
import './index.css'
import wallet from '@/assets/img/wallet@2x.png'
import MyBottom from '@/components/myBottom'
import Level from '@/components/Level'
import MyModel from './components/MyModel'
import { connect } from 'react-redux';
import { getLockin } from '@/service'
import {store} from '@/store'
import { approveV2, stakeV2, withdrawV2} from '@/events/contracts/transaction'
import ctx from '../../events';
import LevelMap from '@/components/LevelMap'
import {updateAccount} from '../../events/contracts/accounts'


// const _data = {
//   kyc: true,  // (true-已认证，false-未认证),
//   userLv: 3,   // (0-4,5个等级),
//   lastDeposit: 3,  // (3days ago)
// }


function Account (props) {
  const { account, balances, isApprove, ANOTotalStakeAccount } = props
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({})
  const [modalLeftBun, setModalLeftBun] = useState('APPROVE')
  const [active, setActive] = useState(true)
  const [value, setValue] = useState(0)

  const balance = useMemo(() => (balances / 10000000000).toFixed(4) || 0, [balances])

  useEffect(() => {
    // 初始化区块链库
    ctx.event.emit('initEthereum');
  }, []);

  function handleChange (val) {
    setValue(val)
  }

  const hideModal = useCallback(() => {
    setVisible(false)
    setValue(0)
  })


  function handleAction () {
    setVisible(false)
    if (!active) {return;}
    if (modalLeftBun === 'APPROVE') {
      _approve()
      setValue(0)
      return
    }
    if (modalLeftBun === 'DEPOSITE') {
      handleDeposit()
      setValue(0)
      return
    }
    if (modalLeftBun === 'UNLOCK') {
      handleWithDraw()
      setValue(0)
      return
    }
  }
  // 授权
  async function _approve () {
    const res = await approveV2();
    // console.log(res)
    res && store.dispatch({type: 'ISAPPROVEV2', payload: true})
    updateAccount()
    fetchData()
  }
  // 质押
  async function handleDeposit () {
    await stakeV2(value);
    updateAccount()
    fetchData()
  }
  // 提取本金
  async function handleWithDraw () {
    await withdrawV2(value);
    updateAccount()
    fetchData()
  }

  const lockIn = useCallback(() => {
    if (!data.root) {return}
    setVisible(true)
    setActive(true)
    isApprove ? setModalLeftBun('DEPOSITE') : setModalLeftBun('APPROVE')
  })
  const unlock = useCallback(() => {
    if (!data.root) {return}
    setVisible(true)
    setActive(!!ANOTotalStakeAccount)
    setModalLeftBun('UNLOCK')

  })

  useEffect(async () => {
    fetchData()
  }, [account])

  async function fetchData () {
    try {
      let res = await getLockin({account});
      res = res.data
      if (!res || !res.data) {throw new Error('')}
      setData(res.data)
    } catch (error) {
      setData({})
    }
  }
  return (
    <div className="account">
      <div className="account-content">
        <LevelMap  ANOTotalStakeAccount={ANOTotalStakeAccount} balance={balance} account={account} level={data.userLv}/>
        {/* data && data.kyc ? null :  */}
        {
          data && data.kyc ? null : <div className="verified">
          Some pools may requre you to be KYC verified
          <div>KYC for DAOStarter projects</div>
          </div>
        }
        <div className="available-balance">
          <div className="balance">
                   Available balance: <span>{ANOTotalStakeAccount || 0}</span>
          </div>
          <div className="balance-handler">
            <div onClick={lockIn} className={`lockin ${data.root ? '' : 'unactive'}`}>LOCK-IN</div>
            <div onClick={unlock} className={`unlock ${data.root ? '' : 'unactive'}`}>UNLOCK</div>
          </div>
          <div>
            <span className="balance">Disclaimer:</span>
            <div className="rules">
              <div className="dates">
                <div>
                  there are penalties when you unlock，based on the date you deposited your last tokens：
                </div>
                <ul>
                  <li>
                    <span>
                                    less than 7 days ago
                    </span>
                    <span>
                                    40%
                    </span>
                  </li>
                  <li>
                    <span>
                                    less than 15 days ago
                    </span>
                    <span>
                                    30%
                    </span>
                  </li>
                  <li>
                    <span>
                                    less than 30 days ago
                    </span>
                    <span>
                                    20%
                    </span>
                  </li>
                  <li>
                    <span>
                                    less than 60 days ago
                    </span>
                    <span>
                                    10%
                    </span>
                  </li>
                  <li>
                    <span>
                                    less than 90 days ago
                    </span>
                    <span>
                                    5%
                    </span>
                  </li>
                  <li>
                    <span>
                                    after 90 days
                    </span>
                    <span>
                                    0%
                    </span>
                  </li>
                </ul>
              </div>
              <div className="stars">
                <div>
                            your stars：
                </div>
                <ul>
                  <li>
                    <span>
                    current penalty
                    </span>
                    <span>
                                    0%
                    </span>
                  </li>
                  <li>
                    <span>
                    last deposit
                    </span>
                    <span>
                    {data.lastDeposit} day(s) ago
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <MyBottom className="account-bottom"/>
      {visible && <MyModel hideModal={hideModal}
        active={active}
        onAction={handleAction}
        left={modalLeftBun}
        balance={balance}
        account={account}
        value={value}
        ANOTotalStakeAccount={ANOTotalStakeAccount}
        onChange={handleChange}
        ANOTotalStakeAccount={data.ANOTotalStakeAccount}
        showMaxValue={handleChange}
      />}
    </div>
  )
}
export default connect(({account, balancesAccount, isApproveAccount, ANOTotalStakeAccount}) =>
  ({account, balances: balancesAccount, isApprove: isApproveAccount, ANOTotalStakeAccount}))(Account)

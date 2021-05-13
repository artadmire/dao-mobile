import React, {useEffect, useState} from 'react'
import './index.css'
import MyBottom from '../../components/myBottom'
import UpcomingProject from './components/upcomingProjects/index.js'
import InProject from './components/inProjects/index.js'
import {NavLink} from 'react-router-dom'
import {getProjects, getPerviousProjects } from '@/service'
import aa from '@/assets/img/编组12@2x.png'
// import { projectsData, perviousProjectsData } from '@/service/mock'
import {connect} from 'react-redux'
import OverProjects from './components/overProjects/index.js'

function Home(props) {
  const [upComingList, setUpComingList] = useState([])
  const [inProgressList, setInProgressList] = useState([])
  const [previousList, setPreviousList] = useState([])
  const {account, chainId} = props
  useEffect(() => {
    const bg = document.getElementById('boxbg')
    bg.className = 'App app-Home'
    return () => {
      bg.className = 'App'
    }
  }, [])

  useEffect(async () => {
    fetchPervious()
  }, [chainId])

  useEffect(async () => {
    fetchProjects()
  }, [])

  async function fetchProjects () {
    try {
      let res = await getProjects();
      res = res.data
      if (!res || !res.data || !res.data.data || !res.data.data.length) {throw new Error('')}
      setUpComingList(res.data.data)
    } catch (error) {
      setUpComingList([])
    }
  }

  // 以前和进行中
  async function fetchPervious () {
    try {
      let res = await getPerviousProjects({chainID: chainId});
      res = res.data
      if (!res || !res.data) {throw new Error('')}
      setPreviousList(res.data.over)
      setInProgressList(res.data.open)
    } catch (error) {
      setPreviousList([])
      setInProgressList([])

    }
  }
  return (
    <div className="home">
      <div className="des">
        <div className="title">DAOStarter</div>
        <div className="title1">The Booster for Crypto Projects</div>
      </div>
      <div className="home-bg">
        <div className="title2">Providing the access to funding blockchain projects</div>
        <div className="main-title upcoming-title">Upcoming Projects</div>
      </div>
      {upComingList && upComingList.length ? <UpcomingProject list={upComingList} /> : null}
      {inProgressList && inProgressList.length ? <InProject list={inProgressList} account={account} /> : null}
      {previousList && previousList.length ? <OverProjects  account={account} list={previousList} /> : null}
       <div className="user-applay">
         <img src={aa}  style={{width:"83px",height:"25px"}}/>
        <div className="title">
          Start your dream on
        </div>
        <div className="title title2">
          DAOStarter ?
        </div>
        <NavLink to='/apply' className="start">APPLY HERE</NavLink>
       </div>
      <MyBottom className="home-bottom"/>
    </div>
  );
}

export default connect(({chainId, account}) => ({chainId, account}))(Home);

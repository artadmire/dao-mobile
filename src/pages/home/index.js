import React, {useEffect, useState} from 'react'
import './index.css'
import MyBottom from '../../components/myBottom'
import UpcomingProject from './components/upcomingProjects/index.js'
import PreviousProject from './components/previousProjects/index.js'
import {NavLink} from 'react-router-dom'
import {getProjects, getPerviousProjects } from '@/service'
import { projectsData, perviousProjectsData } from '@/service/mock'

function Home() {
  const [upComingList, setUpComingList] = useState(projectsData)
  const [previousList, setPreviousList] = useState(perviousProjectsData)
  
  useEffect(() => {
    const bg = document.getElementById('boxbg')
    bg.className = 'App app-Home'
    return () => {
      bg.className = 'App'
    }
  }, [])

  useEffect(async () => {
    fetchPervious()
  }, [])

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

  async function fetchPervious () {
    try {
      let res = await getPerviousProjects();
      res = res.data
      if (!res || !res.data ||  !res.data.data || !res.data.data.length) {throw new Error('')}
      setPreviousList(res.data.data)
    } catch (error) {
      setPreviousList([])
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
      {previousList && previousList.length ? <PreviousProject list={previousList} /> : null}
       <div className="user-applay">
         <img src=''  style={{width:"112px",height:"24px",background:"red"}}/>
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

export default Home;
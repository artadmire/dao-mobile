import React ,{useState, useEffect}from 'react'
import './index.css'
import PreviousProjectItem from '../home/components/inProjects/previousProjectItem'
import MyBottom from '../../components/myBottom'
import { getPerviousProjects} from '@/service'
import { perviousProjectsData} from '@/service/mock'
import {connect} from 'react-redux'

function PreviousList(props) {
    let [list, setList]  = useState([])
    const {chainId} = props;

    useEffect(async () => {
      fetchData()
    }, [chainId])
  
    async function fetchData () {
      try {
        let res = await getPerviousProjects({chainID: chainId});
        res = res.data;
        if (!res || !res.data) {throw new Error('')}
        setList(res.data.all)
      } catch (error) {
        setList([])
      }
    }
    return (
        <div className="previous-list-content">
            <div >
                {
                    list.map((item,index)=><PreviousProjectItem data={item} key={index}/>)
                }
            </div> 
               <MyBottom className="previous-list-bottom"/>
        </div>
       

    )
}

export default connect(({chainId}) => ({chainId}))(PreviousList);


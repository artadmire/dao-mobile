import React ,{useState, useEffect}from 'react'
import './index.css'
import PreviousProjectItem from '../home/components/previousProjects/previousProjectItem'
import MyBottom from '../../components/myBottom'
import { getPerviousProjects} from '@/service'
import { perviousProjectsData} from '@/service/mock'

export default function PreviousList() {
    let [list, setList]  = useState(perviousProjectsData)

    useEffect(async () => {
      fetchData()
    }, [])
  
    async function fetchData () {
      try {
        let res = await getPerviousProjects();
        res = res.data;
        if (!res || !res.data || !res.data.data ||  !res.data.data.length) {throw new Error('')}
        setList(res.data.data)
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

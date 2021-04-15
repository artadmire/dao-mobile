import React ,{useState}from 'react'
import './index.css'
import PreviousProjectItem from '../home/components/previousProjects/previousProjectItem'
import MyBottom from '../../components/myBottom'

export default function PreviousList() {
    const [list,setList] = useState([1,2,3,5,6,7])
    return (
        <div className="previous-list-content">
            <div >
                {
                    list.map((index,item)=><PreviousProjectItem key={index}/>)
                }
            </div>
               <MyBottom className="previous-list-bottom"/>
        </div>
       

    )
}

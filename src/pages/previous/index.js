import React ,{useState}from 'react'
import PreviousProjectItem from '../home/components/previousProjects/previousProjectItem'
export default function PreviousList() {
    const [list,setList] = useState([1,2,3,5,6,7])
    return (
        <div>
            {
                list.map((index,item)=><PreviousProjectItem key={index}/>)
            }
        </div>
    )
}

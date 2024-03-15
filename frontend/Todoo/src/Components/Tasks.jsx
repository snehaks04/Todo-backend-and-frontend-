import { useEffect, useState } from "react"
import { TaskCard } from "./TaskCard"
import axios from 'axios'

import { Add } from './Add'
  export const Tasks=()=>{
const [tasks , setTasks]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/todo/").then(response => setTasks(response.data.r))
    })

    return (

        <div>
          
             <Add/>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {
                    tasks.map((t,i)=><TaskCard key={i} title={t.title} description={t.description}></TaskCard>)
            }
           </div>
        </div>
    )
  }
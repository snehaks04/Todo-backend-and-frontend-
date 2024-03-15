 import { useNavigate ,} from "react-router-dom"
 import { useState } from "react"
 import axios from 'axios'

 export const TaskCard=({title,description})=>{
  const navigate=useNavigate()
  const [t,setT]=useState("");

  
  
return (
    <div className="  bg-white  p-3 shadow-md shadow-slate-700 rounded-md m-4 sm">
        <div className="flex justify-between items-center "> 
            <h3 className="font-medium text-lg">{title}</h3>
            <div className="flex items-center cursor-pointer">
            <div className="ml-4"  id={title} onClick={async (e) => {
              const h = e.currentTarget.id
            await axios.delete(`http://localhost:3000/todo/${encodeURIComponent(h)}`);
            navigate('/');
        }}>
    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-8" >
  <path strokeLinecap="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</div>
  <div className="ml-2" id={title} onClick={(e) => {
    const h = e.currentTarget.id; // Retrieve the title from data attribute
    setT(h);
    setT(e.target.value)
    navigate("/update/"+ h)
  }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-8" >
  <path stroke-linecap="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

</div>
</div>
 </div>
 <div className="my-3 ">{description}</div>
      
    </div>
)
 }
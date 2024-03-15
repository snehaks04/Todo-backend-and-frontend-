import {useState} from 'react'

import {useNavigate ,useParams} from 'react-router-dom'
import axios from 'axios'

export function Update(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const navigate= useNavigate();
    const {text}=useParams()

    
      
    return (
        <div className="flex justify-center  h-screen items-center ">
            <div className="m-5 p-4 w-72 h-fit rounded shadow-md shadow-slate-700  bg-white ">
            <div className="font-medium text-2xl text-center">UPDATE Task</div>
            <div>
            <div className="mt-3">
                <label className="text-medium" htmlFor="title">Title</label><br />
                <input onChange={(e)=>setTitle(e.target.value)}  className=" border border-gray-600 w-full pl-2 pb-1 rounded mt-2" type="text" placeholder="Title" id="title"/>
            </div>
            <div className="mt-3">
                <label htmlFor="description">Description</label><br />
               <textarea onChange={(e)=>setDescription(e.target.value)} className="border border-gray-600 w-full" name="description" id="description" cols="" rows="2"></textarea>
            </div>
            </div>
            <button className=" w-full mt-3 px-2 text-white bg-black text-medium cursor-pointer font-medium pb-1 " 
           onClick={async () => {
            await axios.put(`http://localhost:3000/todo/${encodeURIComponent(text)}`, {
                title,
                description
            });
            navigate('/');
        }}
        
            >Update</button>
            </div>
        
        </div>
    )
}
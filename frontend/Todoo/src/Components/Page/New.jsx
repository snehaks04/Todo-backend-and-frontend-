import {useState} from 'react';

import {useNavigate} from 'react-router-dom'

import axios from 'axios'

export function New(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const navigate= useNavigate();
  
    return (
        <div className="flex justify-center  h-screen border-2 border-solid border-black items-center ">
            <div className="m-5 p-4 w-72 rounded shadow-md bg-white  shadow-black h-fit ">
            <div className="font-medium text-2xl text-center">ADD Task</div>
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
            onClick={async ()=>{
        await axios.post("http://localhost:3000/todo/new",{
      title:title,
      description:description
     })
     navigate('/')}}>Add</button>
            </div>
        
        </div>
    )
}



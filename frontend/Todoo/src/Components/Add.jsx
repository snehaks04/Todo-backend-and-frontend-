
import {useNavigate} from 'react-router-dom'

export function Add() {
   const navigate=useNavigate()

    return (
   <div className="flex justify-center mb-3">
            <div onClick={()=>{
                navigate('/new')
            }} className="m-4 w-fit p-3 rounded-full shadow-lg cursor-pointer text-white bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

        </div>
        </div>
  
    )
}




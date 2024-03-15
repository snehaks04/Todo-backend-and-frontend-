import { useState } from 'react'
import { Tasks } from './Components/Tasks'
import { New } from './Components/Page/New';
import { Update } from './Components/Update';
import { BrowserRouter,Routes,Route } from "react-router-dom";


import './App.css'


function App() {
 

  return (
    <>

 
    <div  className="bg-green-200 h-screen">
    <BrowserRouter>

    <Routes>
    <Route path={"/"} element={<Tasks/>}></Route>
    <Route path={"/new"} element={<New/>}></Route>
    <Route path={"/update/:text"} element={<Update/>}></Route>
  
    </Routes>
    </BrowserRouter>  
        </div>

      
    
    </>
  )
}

export default App

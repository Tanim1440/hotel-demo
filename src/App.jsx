import React from "react";
import Navber from "./components/Navber";
import { Routes } from "react-router-dom";
import Home from "./components/Home";


const App = () => {

  const isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navber/>}
      <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
      </div>
    </div>
  )
}

export default App
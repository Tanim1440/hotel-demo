// import React from "react";
// import Navber from "./components/Navber";
// import { Routes, useLocation } from "react-router-dom";
// import Home from "./components/Home";


// const App = () => {

//   const isOwnerPath=useLocation().pathname.includes("owner");

//   return (
//     <div>
//       {!isOwnerPath && <Navber/>}
//       <div className='min-h-[70vh]'>
//        <Routes>
//         <Route path='/' element={<Home/>}/>
//        </Routes>
//       </div>
//     </div>
//   )
// }

// export default App



import { Routes, Route, useLocation } from "react-router-dom";
import Navber from "./components/Navber";
import Home from "./components/Home";

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navber />}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
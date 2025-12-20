
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navber from "./components/Navber";
// import Home from "./components/Home";
// import Footer from "./components/Footer";
// import AllRooms from "./components/pages/AllRooms";

// const App = () => {
//   const location = useLocation();
//   const isOwnerPath = location.pathname.includes("owner");

//   return (
//     <div>
//       {!isOwnerPath && <Navber />}
//       <div>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/rooms" element={<AllRooms/>} />

//       </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import Navber from "./components/Navber";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AllRooms from "./components/pages/AllRooms";

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <>
      {!isOwnerPath && <Navber />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<AllRooms />} />

        {/* Temporary route to prevent blank page */}
        <Route path="/rooms/:id" element={<div>Room Details</div>} />
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;

// import React from "react";
// import { assets, roomsDummyData } from "../../assets/assets";
// import { useNavigate } from "react-router-dom";
// import StarRating from "../StarRating";

// const AllRooms = () => {
//     const navigate=useNavigate();
//     return(
//         <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
//           <div>
//             <div className="flex flex-col items-start text-left">
//                 <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
//                 <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
//             </div>

//             {roomsDummyData.map((room)=>(
//                 <div>
//                     <img onClick={()=> {navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
//                     src={room.images[0]} alt="hotel-img" title="View Room Details" className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"/>
//                     <div className="md:w-1/2 flex flex-col gap-2">
//                         <p className="text-gray-500">{room.hotel.city}</p>
//                         <p onClick={()=> {navigate(`/rooms/${room._id}`); scrollTo(0,0)}} className="text-gray-800 text-3xl font-playfair cursor-pointer">{room.hotel.name}</p>
//                         <div className="flex items-center">
//                             <StarRating />
//                             <p className="ml-2">200+ review</p>
//                         </div>
//                         <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
//                             <img src={assets.locationIcon} alt="location-icon" />
//                             <span>{room.hotel.address}</span>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//           </div>
//          {/*filters*/} 
//          <div>

//          </div>
//         </div>
//     )
// }

// export default AllRooms

import { assets, roomsDummyData } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating";

const AllRooms = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/rooms/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32">
      
      {/* Rooms Section */}
      <div className="w-full lg:w-2/3">
        <div className="flex flex-col items-start text-left mb-8">
          <h1 className="font-playfair text-4xl md:text-[40px]">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row gap-6 mb-10"
          >
            {/* Image */}
            <img
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              onClick={() => handleNavigate(room._id)}
              className="w-full md:w-1/2 max-h-64 rounded-xl shadow-lg object-cover cursor-pointer"
            />

            {/* Room Info */}
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>

              <p
                onClick={() => handleNavigate(room._id)}
                className="text-gray-800 text-3xl font-playfair cursor-pointer hover:text-primary"
              >
                {room.hotel.name}
              </p>

              <div className="flex items-center">
                <StarRating rating={room.rating || 4} />
                <p className="ml-2 text-sm text-gray-500">
                  200+ reviews
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                <img
                  src={assets.locationIcon}
                  alt="location-icon"
                  className="w-4 h-4"
                />
                <span>{room.hotel.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Section */}
      <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
        {/* Filters will go here */}
      </div>
    </div>
  );
};

export default AllRooms;

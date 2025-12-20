import React, { useState } from "react";
import Title from "../Title";
import { assets, userBookingsDummyData } from "../../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        {/* Header */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] border-b border-gray-300 font-medium py-3">
          <p>Hotels</p>
          <p>Date & Timings</p>
          <p>Payment</p>
        </div>

        {/* Bookings */}
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] border-b border-gray-300 py-6 first:border-t"
          >
            {/* Hotel Info */}
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={booking.room.images[0]}
                alt="hotel"
                className="w-full md:w-44 h-28 rounded shadow object-cover"
              />

              <div className="flex flex-col gap-1.5">
                <p className="font-playfair text-2xl">
                  {booking.hotel.name}
                  <span className="text-sm font-inter ml-2">
                    ({booking.room.roomType})
                  </span>
                </p>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location" />
                  <span>{booking.hotel.address}</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <img src={assets.guestsIcon} alt="guests" />
                    <span>Guests: {booking.guests}</span>
                  </div>
                  <p>Total: ${booking.totalPrice}</p>
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="mt-4 md:mt-0 text-sm text-gray-600">
              <p>{booking.checkIn} → {booking.checkOut}</p>
            </div>

            {/* Payment */}
            <div className="mt-4 md:mt-0 text-sm font-medium text-green-600">
              {booking.paymentStatus || "Paid"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;

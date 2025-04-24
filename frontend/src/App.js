import React from 'react';
import HotelList from './HotelList';
import RoomForm from './RoomForm';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

function App() {
  return (
    <div className="container mt-4">
      <h1>Hotel Management System</h1>
      <HotelList />
      <h2 className="mt-5">➕ Add Room</h2>
      <RoomForm />
      <h2 className="mt-5">➕ Add Booking</h2>
      <BookingForm />
      <BookingList />
    </div>
  );
}

export default App;

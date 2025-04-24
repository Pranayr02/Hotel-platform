import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingForm() {
  const [booking, setBooking] = useState({
    customerName: '',
    checkInDate: '',
    checkOutDate: '',
    roomId: ''
  });

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8088/rooms')
      .then(res => setRooms(res.data))
      .catch(err => console.error("❌ Error loading rooms:", err));
  }, []);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8088/bookings', {
      customerName: booking.customerName,
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      room: { id: booking.roomId }
    })
    .then(() => alert('✅ Booking added!'))
    .catch(err => console.error('❌ Booking error:', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="customerName"
        placeholder="Customer Name"
        className="form-control mb-2"
        onChange={handleChange}
      />
      <input
        name="checkInDate"
        type="date"
        className="form-control mb-2"
        onChange={handleChange}
      />
      <input
        name="checkOutDate"
        type="date"
        className="form-control mb-2"
        onChange={handleChange}
      />
      <select
        name="roomId"
        className="form-control mb-2"
        onChange={handleChange}
        value={booking.roomId}
      >
        <option value="">-- Select Room --</option>
        {rooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.roomNumber} - {room.type}
          </option>
        ))}
      </select>
      <button className="btn btn-primary">Add Booking</button>
    </form>
  );
}

export default BookingForm;

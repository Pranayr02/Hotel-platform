import React, { useState } from 'react';
import axios from 'axios';

function RoomForm() {
  const [room, setRoom] = useState({
    roomNumber: '',
    type: '',
    price: ''
  });

  const handleChange = e => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8088/rooms', room)
      .then(() => alert("✅ Room added!"))
      .catch(err => console.error("❌ Error:", err));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="roomNumber" placeholder="Room Number" className="form-control mb-2" onChange={handleChange} />
      <input name="type" placeholder="Type (e.g. Deluxe)" className="form-control mb-2" onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" className="form-control mb-2" onChange={handleChange} />
      <button className="btn btn-success">Add Room</button>
    </form>
  );
}

export default RoomForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8088/bookings')
      .then(res => setBookings(res.data))
      .catch(err => console.error("❌ Error loading bookings:", err));
  }, []);

  return (
    <div className="mt-5">
      <h2>📄 All Bookings</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Room #</th>
            <th>Type</th>
            <th>Check-In</th>
            <th>Check-Out</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.customerName || '—'}</td>
              <td>{b.room?.roomNumber || '—'}</td>
              <td>{b.room?.type || '—'}</td>
              <td>{b.checkInDate || '—'}</td>
              <td>{b.checkOutDate || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;

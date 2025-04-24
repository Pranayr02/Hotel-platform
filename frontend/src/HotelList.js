import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    console.log("📦 useEffect fired");
    axios.get('http://localhost:8088/hotels')
      .then(res => {
        console.log("✅ Hotels fetched:", res.data);
        setHotels(res.data);
      })
      .catch(err => {
        console.error("❌ Error fetching hotels:", err);
      });
  }, []);

  return (
    <div>
      <h2>Hotel List</h2>
      <ul className="list-group">
        {hotels.map(h => (
          <li key={h.id} className="list-group-item">
            {h.name} – {h.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;

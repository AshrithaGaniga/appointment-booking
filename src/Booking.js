import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = ({ userData }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please choose a date");
      return;
    }

    navigate("/confirmation", {
      state: {
        userData: userData,
        appointmentDate: selectedDate
      }
    });
  };

  return (
    <div className="container">
      <h2>Select Appointment Date</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  );
};

export default Booking;

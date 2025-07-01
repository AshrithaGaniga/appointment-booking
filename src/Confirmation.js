import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, appointmentDate } = location.state || {};

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="confirmation-page ">
      <h2>Thank You, {userData?.name || "Guest"}!</h2>
      <p>Your appointment is booked for: <b>{appointmentDate}</b></p>
      <p>Email: <b>{userData?.email || "Not Provided"}</b></p>
      <p>Age: <b>{userData?.age || "Not Provided"}</b></p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Confirmation;

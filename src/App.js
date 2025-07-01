import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Booking from "./Booking";
import Confirmation from "./Confirmation";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn setUserData={setUserData} />} />
        <Route path="/booking" element={<Booking userData={userData} />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;

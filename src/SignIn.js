import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setUserData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!age.trim()) newErrors.age = "Age is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!email.includes("@")) newErrors.email = "Invalid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setUserData({ name, age, email });
    navigate("/booking");
  };

  return (
    <div className="container">
      <h2>Book Your Appointment</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <div className="error">{errors.name}</div>}

      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {errors.age && <div className="error">{errors.age}</div>}

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
};

export default SignIn;

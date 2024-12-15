// src/pages/Register.js

import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    medicalNeeds: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit formData to backend
  };

  return (
    <div>
      <h2>Citizen Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input type="text" name="medicalNeeds" placeholder="Medical Needs (Optional)" value={formData.medicalNeeds} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

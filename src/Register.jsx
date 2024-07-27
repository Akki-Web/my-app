import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Added role state

  const handleRegister = () => {
    axios.post('http://localhost:8080/auth/register', {
      username,
      password,
      role // Sending role information to backend
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log('Registration success:', response);
    }).catch(error => {
      console.log('Registration failed:', error);
    });
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="auth-input"
      />
      <input
        type="text"
        placeholder="Role (e.g., ADMIN, USER)"
        value={role}
        onChange={e => setRole(e.target.value)}
        className="auth-input"
      />
      <button onClick={handleRegister} className="auth-button">Register</button>
    </div>
  );
}

export default Register;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './User.css'; // Ensure you have this file for styling

function User() {
  const location = useLocation();
  const { userData } = location.state || {};

  if (!userData) {
    return <p>No data available</p>;
  }

  return (
    <div className="user-container">
      <h1>User Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userData.id}</td>
            <td>{userData.username}</td>
            <td>{userData.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default User;

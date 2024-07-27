import React from 'react';
import { useLocation } from 'react-router-dom';
import './Admin.css'; // Ensure you have this file for styling

function Admin() {
  const location = useLocation();
  const { userData } = location.state || {};

  if (!userData) {
    return <p>No data available</p>;
  }

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;


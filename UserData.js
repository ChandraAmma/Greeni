
import React, { useState } from 'react';
import UserData from './UserData'; // Mock user data

const UserDetailsTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = () => {
    // Implement search logic based on the searchTerm
    // Update the displayed user data accordingly
  };

  const handleUserClick = (user) => {
    // Set the selected user and open a modal or popup
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    // Close the modal or popup
    setSelectedUser(null);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by username, email, phone, etc."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {UserData.map((user) => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.id}</td>
              <td>{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal or Popup for detailed user information */}
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Username: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>ID: {selectedUser.id}</p>
          <p>Creation Date: {selectedUser.creationDate}</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UserDetailsTab;
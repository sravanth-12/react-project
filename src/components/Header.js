import React, { useState } from 'react';
import './Header.css';
import ProfilePicture from './PP.png'; // Import the image

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <header className="main-header">
      <div className="profileMenu">
        <img src={ProfilePicture} alt="Profile Picture" className="avatar" />
        <span className="username">Tejendra Chary</span>
        <button onClick={handleClick} className="dropdownButton">
          <span>&#9662;</span>
        </button>
        {open && (
          <div className="dropdownContent" onClick={handleClose}>
            <a href="#" className="dropdownContentA">About</a>
            <a href="#" className="dropdownContentA">Registration</a>
            <a href="#" className="dropdownContentA">Support</a>
            <a href="#" className="dropdownContentA">Logout</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default ProfileMenu;

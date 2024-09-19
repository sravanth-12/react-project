import React from 'react';
import './Sidebar.css'; // Import your CSS file for styling

const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <div className="sidebar">
      <h3>Report Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

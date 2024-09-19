import React, { useState } from 'react';
import './AddEmp.css'; // Import your CSS file for styling

const AddEmp = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [createLogin, setCreateLogin] = useState(false); // State for slide button

  const handleSave = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { firstName, middleName, lastName, employeeId, createLogin });
    // You can add further logic like API calls to save data
  };

  const handleCancel = () => {
    // Handle cancel logic here, e.g., clear form fields or close modal
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setEmployeeId('');
    setCreateLogin(false);
  };

  return (
    <div className="add-employee-form">
      <h2>Add Employee</h2>
      <div className="form-group">
        <label>Profile Picture</label>
        <input type="file" accept="image/*" required />
      </div>
      <div className="form-group">
        <label>Employee Full Name</label>
        <div className="name-fields">
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <input type="text" placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
      </div>
      <div className="form-group">
        <label>Employee ID</label>
        <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Create Login Details</label>
        <label className="switch">
          <input type="checkbox" checked={createLogin} onChange={() => setCreateLogin(!createLogin)} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="form-buttons">
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddEmp;

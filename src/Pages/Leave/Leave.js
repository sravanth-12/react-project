import React, { useState } from 'react';
import './Leave.css';
 
const Leave= () => {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 leaveType: 'Sick Leave',
 startDate: '',
 endDate: '',
 reason: ''
 });
 
 const handleChange = (e) => {
 const { name, value } = e.target;
 setFormData({
 ...formData,
 [name]: value
 });
 };
 
 const handleSubmit = (e) => {
 e.preventDefault();
 // Handle form submission, e.g., send the data to an API
 console.log('Form data submitted:', formData);
 };
 
 return (
 <form className="leave-form" onSubmit={handleSubmit}>
 <div className="form-group">
 <label htmlFor="name">Name:</label>
 <input
 type="text"
 id="name"
 name="name"
 value={formData.name}
 onChange={handleChange}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="email">Email:</label>
 <input
 type="email"
 id="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="leaveType">Leave Type:</label>
 <select
 id="leaveType"
 name="leaveType"
 value={formData.leaveType}
 onChange={handleChange}
 >
 <option value="Sick Leave">Sick Leave</option>
 <option value="Casual Leave">Casual Leave</option>
 <option value="Annual Leave">Annual Leave</option>
 </select>
 </div>
 <div className="form-group">
 <label htmlFor="startDate">Start Date:</label>
 <input
 type="date"
 id="startDate"
 name="startDate"
 value={formData.startDate}
 onChange={handleChange}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="endDate">End Date:</label>
 <input
 type="date"
 id="endDate"
 name="endDate"
 value={formData.endDate}
 onChange={handleChange}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="reason">Reason:</label>
 <textarea
 id="reason"
 name="reason"
 value={formData.reason}
 onChange={handleChange}
 required
 ></textarea>
 </div>
 <button type="submit">Submit</button>
 </form>
 );
};
 
export default Leave;
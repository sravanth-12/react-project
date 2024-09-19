import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Memberships.css';

const Memberships = () => {
  const [formData, setFormData] = useState({
    emp_number: '',
    membship_code: '',
    ememb_subscript_ownership: '',
    ememb_subscript_amount: '',
    ememb_subs_currency: '',
    ememb_commence_date: '',
    ememb_renewal_date: '',
    // eec_family: '' // Adding eec_family field to formData
  });

  const [memberships, setMemberships] = useState([]);
  const [membership, setMembership] = useState();
  
  const [showmembship_codesForm, setShowmembship_codesForm] = useState(false);
  const [showAttachmentForm, setShowAttachmentForm] = useState(false);

  const handleAddmembship_codesClick = () => {
    setShowmembship_codesForm(true);
  };

  const handleAddAttachmentClick = () => {
    setShowAttachmentForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Fetch countries from the API
    axios.get('http://192.168.100.6:8082/Admin/Membership/getAll') // Replace with your actual API endpoint
      .then(response => {
        //console.log('Countries fetched:', response.data); // Add this log
        setMemberships(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
   

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Display success message
      alert('Form data saved successfully!');
      // Add axios post request here
      await axios.post('http://192.168.100.6:8080/My-info/MemberDetails/add', formData);
    } catch (error) {
      // Handle error here
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-row">
        <label>Assigned Memberships</label>
        <button type="button" className="add-button" onClick={handleAddmembship_codesClick}>+ Add</button>
      </div>
      {showmembship_codesForm && (
        <div>
          <h3>Add Memberships</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Employee Number</label>
              <input type="number" name="emp_number" placeholder="Emp Number" value={formData.emp_number} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Membership</label>
              <select
                        name="membship_code"
                        value={formData.membship_code}
                        onChange={handleChange}
                    >
                       <option>-- Select --</option>
                        {memberships.map(membership => (
                <option key={membership} value={membership}>
                  {membership}
                  </option>
              ))}
                    </select>
                    
        
            </div>
            <div className="form-row">
              <label>Subscription Paid By</label>
              <select
                name="ememb_subscript_ownership" value={formData.ememb_subscript_ownership} onChange={handleChange}>
                <option value="select">-- Select --</option>
                <option value="Company">Company</option>
                <option value="Individual">Individual</option>
              </select>
            </div>
            <div className="form-row">
              <label>Subscription Amount</label>
              <input type="number" name="ememb_subscript_amount" value={formData.ememb_subscript_amount} onChange={handleChange} />
              <label>Currency</label>
              <select
                name="ememb_subs_currency" value={formData.ememb_subs_currency} onChange={handleChange}>
                <option value="select">-- Select --</option>
                <option value="India">India</option>
                <option value="US">US</option>
              </select>
            </div>
            <div className="form-row">
              <label>Subscription Commence Date</label>
              <input type="date" name="ememb_commence_date" value={formData.ememb_commence_date} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Subscription Renewal Date</label>
              <input type="date" name="ememb_renewal_date" value={formData.ememb_renewal_date} onChange={handleChange} />
            </div>
            <div className="form-save-row">
              <button type="button" onClick={() => setShowmembship_codesForm(false)}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      )}
      <div className="form-container1">
        <h3>Custom Fields</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Family</label>
            <input type="text" name="eec_family" value={formData.eec_family} onChange={handleChange} />
          </div>
          <div className="form-save-row">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
      <div className="form-row">
        <label>Attachments</label>
        <button type="button" className="add-button" onClick={handleAddAttachmentClick}>+ Add</button>
      </div>
      {showAttachmentForm && (
        <div className="attachment-form">
          <div className="form-row">
            <label>Select File*</label>
            <input type="file" />
          </div>
          <div className="form-row">
            <label>Comment</label>
            <textarea placeholder="Type comment here"></textarea>
          </div>
          <div className="form-save-row">
            <button type="button" onClick={() => setShowAttachmentForm(false)}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </div>
      )}
      <div className="form-row">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>File Name</th>
              <th>Description</th>
              <th>Size</th>
              <th>Type</th>
              <th>Date Added</th>
              <th>Added By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8">No Records Found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Memberships;


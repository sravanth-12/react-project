import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const tabs = [
    'User Management',
    'Job',
    'Organization',
    'Qualifications',
    'Nationalities',
    'Corporate Branding',
    'Configuration'
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case 'User Management':
        <div className="filter-item">
                {/* <label htmlFor="users">Users</label> */}
                <select id="users">
                  <option value="">Users</option>
                  </select>
              </div>
        return (
          <section className="content-section">
            <h2 className="section-title">System Users</h2>
            <div className="filters">
              <div className="filter-item">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Type for hints..." />
              </div>
              <div className="filter-item">
                <label htmlFor="userRole">User Role</label>
                <select id="userRole">
                  <option value="">-- Select --</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div className="filter-item">
                <label htmlFor="employeeName">Employee Name</label>
                <input type="text" id="employeeName" placeholder="Type for hints..." />
              </div>
              <div className="filter-item">
                <label htmlFor="status">Status</label>
                <select id="status">
                  <option value="">-- Select --</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="filter-actions">
              <button className="btn reset-btn">Reset</button>
              <button className="btn search-btn">Search</button>
            </div>
          </section>
        );
      case 'Job':
        return <section className="content-section">Job Content</section>;
      case 'Organization':
        return <section className="content-section">Organization Content</section>;
      case 'Qualifications':
        return <section className="content-section">Qualifications Content</section>;
      case 'Nationalities':
        return <section className="content-section">Nationalities Content</section>;
      case 'Corporate Branding':
        return <section className="content-section">Corporate Branding Content</section>;
      case 'Configuration':
        return <section className="content-section">Configuration Content</section>;
      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <nav className="admin-nav">
          <ul className="admin-tabs">
            {tabs.map(tab => (
              <li
                key={tab}
                className={`admin-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="admin-main">
        {renderContent()}
      </main>
    </div>
  );
};

export default Admin;

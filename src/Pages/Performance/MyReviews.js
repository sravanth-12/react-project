import React, { useState } from 'react';
import './Time1.css';
import './MyReviews.css';

const Topbar = () => {
  const [isConfigureDropdownOpen, setConfigureDropdownOpen] = useState(false);
  const [isManageReviewsDropdownOpen, setManageReviewsDropdownOpen] = useState(false);
  const [isMyTrackersDropdownOpen, setMyTrackersDropdownOpen] = useState(false);
  const [isEmployeeTrackerDropdownOpen, setEmployeeTrackerDropdownOpen] = useState(false);

  const toggleConfigureDropdown = () => {
    setConfigureDropdownOpen(!isConfigureDropdownOpen);
    closeOtherDropdowns('configure');
  };

  const toggleManageReviewsDropdown = () => {
    setManageReviewsDropdownOpen(!isManageReviewsDropdownOpen);
    closeOtherDropdowns('manage-reviews');
  };

  const toggleMyTrackersDropdown = () => {
    setMyTrackersDropdownOpen(!isMyTrackersDropdownOpen);
    closeOtherDropdowns('my-trackers');
  };

  const toggleEmployeeTrackerDropdown = () => {
    setEmployeeTrackerDropdownOpen(!isEmployeeTrackerDropdownOpen);
    closeOtherDropdowns('employee-tracker');
  };

  const closeOtherDropdowns = (currentDropdown) => {
    if (currentDropdown !== 'configure') {
      setConfigureDropdownOpen(false);
    }
    if (currentDropdown !== 'manage-reviews') {
      setManageReviewsDropdownOpen(false);
    }
    if (currentDropdown !== 'my-trackers') {
      setMyTrackersDropdownOpen(false);
    }
    if (currentDropdown !== 'employee-tracker') {
      setEmployeeTrackerDropdownOpen(false);
    }
  };

  const handlePreviousClick = () => {
    console.log('Previous period clicked');
  };

  const handleNextClick = () => {
    console.log('Next period clicked');
  };

  const handleCalendarClick = () => {
    console.log('Calendar clicked');
  };

  return (
    <div>
      <nav role="navigation" aria-label="Topbar Menu" className="oxd-topbar-body-nav">
        <ul>
          <li className={`oxd-topbar-body-nav-tab --parent ${isConfigureDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleConfigureDropdown}>
              Configure <i className="oxd-icon bi-chevron-down" />
            </span>
            {isConfigureDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/KPIs" role="menuitem" className="oxd-topbar-body-nav-tab-link">KPIs</a>
                  <a href="/Trackers" role="menuitem" className="oxd-topbar-body-nav-tab-link">Trackers</a>
                </li>
              </ul>
            )}
          </li>
          <li className={`oxd-topbar-body-nav-tab --parent ${isManageReviewsDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleManageReviewsDropdown}>
              Manage Reviews <i className="oxd-icon bi-chevron-down" />
            </span>
            {isManageReviewsDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/EmployeeReviews" role="menuitem" className="oxd-topbar-body-nav-tab-link">Employee Reviews</a>
                  <a href="/ManageReviews" role="menuitem" className="oxd-topbar-body-nav-tab-link">Manage Reviews</a>
                  <a href="/MyReviews" role="menuitem" className="oxd-topbar-body-nav-tab-link">My Reviews</a>
                </li>
              </ul>
            )}
          </li>
          <li className={`oxd-topbar-body-nav-tab --parent ${isMyTrackersDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleMyTrackersDropdown}>
              My Trackers <i className="oxd-icon bi-chevron-down" />
            </span>
            {isMyTrackersDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/MyTrackers" role="menuitem" className="oxd-topbar-body-nav-tab-link">My Trackers</a>
                </li>
              </ul>
            )}
          </li>
          <li className={`oxd-topbar-body-nav-tab --parent ${isEmployeeTrackerDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleEmployeeTrackerDropdown}>
              Employee Tracker <i className="oxd-icon bi-chevron-down" />
            </span>
            {isEmployeeTrackerDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/EmployeeTrackers1" role="menuitem" className="oxd-topbar-body-nav-tab-link">Employee Trackers</a>
                  
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="oxd-topbar-body-nav-slot">
          <button className="oxd-icon-button" type="button" title="Help">
            <i className="oxd-icon bi-question-lg"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

const MyReviews = () => {
  return (
    <div className="my-reviews-container">
      {/* <div className="header">
        <h2>Performance / Manage Reviews</h2>
      </div> */}
      {/* <div className="navigation">
        <button className="nav-button">Configure</button>
        <button className="nav-button active">Manage Reviews</button>
        <button className="nav-button">My Trackers</button>
        <button className="nav-button">Employee Trackers</button>
      </div> */}
      <div className="reviews-section">
        <h3>My Reviews</h3>
        <div className="table-container">
          <p>No Records Found</p>
          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Sub Unit</th>
                <th>Review Period</th>
                <th>Due Date</th>
                <th>Self Evaluation Status</th>
                <th>Review Status</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Topbar />
      <MyReviews />
    </div>
  );
};

export default App;

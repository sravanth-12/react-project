import React, { useState } from 'react';
import './ProjectReport1.css';  // Ensure this CSS file includes styles for both components
import './Time.css';           // Ensure this CSS file includes styles for both components

const Topbar = () => {
  const [isTimesheetsDropdownOpen, setTimesheetsDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
  const [isReportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  const toggleTimesheetsDropdown = () => {
    setTimesheetsDropdownOpen(!isTimesheetsDropdownOpen);
    closeOtherDropdowns('timesheets');
  };

  const toggleAttendanceDropdown = () => {
    setAttendanceDropdownOpen(!isAttendanceDropdownOpen);
    closeOtherDropdowns('attendance');
  };

  const toggleReportsDropdown = () => {
    setReportsDropdownOpen(!isReportsDropdownOpen);
    closeOtherDropdowns('reports');
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
    closeOtherDropdowns('projects');
  };

  const closeOtherDropdowns = (currentDropdown) => {
    if (currentDropdown !== 'timesheets') {
      setTimesheetsDropdownOpen(false);
    }
    if (currentDropdown !== 'attendance') {
      setAttendanceDropdownOpen(false);
    }
    if (currentDropdown !== 'reports') {
      setReportsDropdownOpen(false);
    }
    if (currentDropdown !== 'projects') {
      setProjectsDropdownOpen(false);
    }
  };

  return (
    <div>
      <nav role="navigation" aria-label="Topbar Menu" className="oxd-topbar-body-nav">
        <ul>
          <li className={`oxd-topbar-body-nav-tab --parent ${isTimesheetsDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleTimesheetsDropdown}>
              Timesheets <i className="oxd-icon bi-chevron-down" />
            </span>
            {isTimesheetsDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/MyTimeSheet" role="menuitem" className="oxd-topbar-body-nav-tab-link">My Timesheets</a>
                  <a href="/EmployeeTimeSheet" role="menuitem" className="oxd-topbar-body-nav-tab-link">Employee TimeSheet</a>
                </li>
              </ul>
            )}
          </li>
          <li className={`oxd-topbar-body-nav-tab --parent ${isAttendanceDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleAttendanceDropdown}>
              Attendance <i className="oxd-icon bi-chevron-down" />
            </span>
            {isAttendanceDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/MyAttendanceRecord" role="menuitem" className="oxd-topbar-body-nav-tab-link">My Records</a>
                  <a href="/PunchIn" role="menuitem" className="oxd-topbar-body-nav-tab-link">Punch In/Out</a>
                  <a href="/EmployeeAttendanceRecord" role="menuitem" className="oxd-topbar-body-nav-tab-link">EmployeeAttendanceRecord</a>
                  <a href="/Configuration" role="menuitem" className="oxd-topbar-body-nav-tab-link">Configuration</a>
                </li>
              </ul>
            )}
          </li>
          <li className={`oxd-topbar-body-nav-tab --parent ${isReportsDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleReportsDropdown}>
              Reports <i className="oxd-icon bi-chevron-down" />
            </span>
            {isReportsDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/Reports" role="menuitem" className="oxd-topbar-body-nav-tab-link">Generate Reports</a>
                  <a href="/ProjectReport1" role="menuitem" className="oxd-topbar-body-nav-tab-link">Project Reports</a>
                  <a href="/EmployeeReports" role="menuitem" className="oxd-topbar-body-nav-tab-link">Employee Reports</a>
                  <a href="/AttendanceTotalSummaryReport" role="menuitem" className="oxd-topbar-body-nav-tab-link">Attendance Total Summary Report</a>
                </li>
              </ul>
            )}
          </li>
          <li className={`oxd-topbar-body-nav-tab --parent ${isProjectsDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleProjectsDropdown}>
              Projects <i className="oxd-icon bi-chevron-down" />
            </span>
            {isProjectsDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/Customers" role="menuitem" className="oxd-topbar-body-nav-tab-link">Customers</a>
                  <a href="/ProjectInfo" role="menuitem" className="oxd-topbar-body-nav-tab-link">Projects Info</a>
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

const ProjectReport = () => {
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [onlyApproved, setOnlyApproved] = useState(false);

  const handleViewClick = () => {
    // Handle the view logic here
    console.log('View button clicked');
    console.log('Project Name:', projectName);
    console.log('Date Range:', startDate, 'to', endDate);
    console.log('Only Approved Timesheets:', onlyApproved);
  };

  return (
    <div className="project-report-container">
      <h2>Project Report</h2>
      <form className="project-report-form">
        <div className="form-group">
          <label>Project Name*</label>
          <input
            type="text"
            placeholder="Type for hints..."
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Project Date Range</label>
          <div className="date-range">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span>To</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group toggle-switch">
          <label>Only Include Approved Timesheets</label>
          <input
            type="checkbox"
            checked={onlyApproved}
            onChange={(e) => setOnlyApproved(e.target.checked)}
          />
        </div>
        <button type="button" className="view-button" onClick={handleViewClick}>
          View
        </button>
      </form>
    </div>
  );
};

const CombinedComponent = () => {
  return (
    <div>
      <Topbar />
      <ProjectReport />
    </div>
  );
};

export default CombinedComponent;

import React, { useState } from 'react';
import './ProjectInfo.css';
import './Time.css';

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
                  <a href="/EmployeeReports" role="menuitem" className="oxd-topbar-body-nav-tab-link">EmployeeReports</a>
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
                  <a href="/Customers1" role="menuitem" className="oxd-topbar-body-nav-tab-link">customer</a>
                  <a href="/ProjectInfo" role="menuitem" className="oxd-topbar-body-nav-tab-link">Projects info</a>
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

      <div className="projects">
        <h2>Projects</h2>
        <form className="search-form">
          <div className="form-group">
            <label>Customer Name</label>
            <input type="text" placeholder="Type for hints..." />
          </div>
          <div className="form-group">
            <label>Project</label>
            <input type="text" placeholder="Type for hints..." />
          </div>
          <div className="form-group">
            <label>Project Admin</label>
            <input type="text" placeholder="Type for hints..." />
          </div>
          <div className="form-buttons">
            <button type="reset">Reset</button>
            <button type="submit">Search</button>
          </div>
        </form>
        <button className="add-button">+ Add</button>
        <div className="records-found">
          (3) Records Found
        </div>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Customer Name</th>
              <th>Project</th>
              <th>Project Admins</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>test</td>
              <td>project2</td>
              <td>Bhanupriya S, Raghavender T</td>
              <td>
                <button className="action-button edit">Edit</button>
                <button className="action-button delete">Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Topbar;

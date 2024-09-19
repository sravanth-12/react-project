import React, { useState } from 'react';
import './MyTimeSheet1.css';

const Topbar = () => {
  const [isTimesheetsDropdownOpen, setTimesheetsDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
  const [period, setPeriod] = useState(false);

  const toggleTimesheetsDropdown = () => {
    setTimesheetsDropdownOpen(!isTimesheetsDropdownOpen);
    setAttendanceDropdownOpen(false); // Close the other dropdown
  };

  const toggleAttendanceDropdown = () => {
    setAttendanceDropdownOpen(!isAttendanceDropdownOpen);
    setTimesheetsDropdownOpen(false); // Close the other dropdown
  };

  const handlePreviousClick = () => {
    // Handle the previous period logic here
    console.log('Previous period clicked');
  };

  const handleNextClick = () => {
    // Handle the next period logic here
    console.log('Next period clicked');
  };

  const handleCalendarClick = () => {
    // Handle the calendar logic here
    console.log('Calendar clicked');
  };

  return (
    <div>
      <nav role="navigation" aria-label="Topbar Menu" className="oxd-topbar-body-nav">
        <ul>
          <li className={`oxd-topbar-body-nav-tab --parent --visited ${isTimesheetsDropdownOpen ? '--active' : ''}`}>
            <span className="oxd-topbar-body-nav-tab-item" onClick={toggleTimesheetsDropdown}>
              Timesheets <i className="oxd-icon bi-chevron-down" />
            </span>
            {isTimesheetsDropdownOpen && (
              <ul className="oxd-dropdown-menu" role="menu">
                <li>
                  <a href="/MyTimeSheet" role="menuitem" className="oxd-topbar-body-nav-tab-link">My Timesheets</a>
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
                  <a href="/MyAttendenceRecord" role="menuitem" className="oxd-topbar-body-nav-tab-link">My Records</a>
                  <a href="/Punchin" role="menuitem" className="oxd-topbar-body-nav-tab-link">Punch In/Out</a>
                </li>
              </ul>
            )}
          </li>
          <div className="oxd-topbar-body-nav-slot">
            <button className="oxd-icon-button" type="button" title="Help">
              <i className="oxd-icon bi-question-lg"></i>
            </button>
          </div>
        </ul>
      </nav>
      {/* <div className="timesheet-content">
        <h2>My Timesheet</h2>
        <div className="timesheet-period-picker">
          <div className="timesheet-period-title">Timesheet Period</div>
          <button className="icon-button" onClick={handlePreviousClick}>
            <i className="bi-chevron-left"></i>
          </button>
          <div className="date-input-container">
            <input type="date" className="date-input" placeholder="Select date" />
            <i className="oxd-icon bi-calendar oxd-date-input-icon" onClick={handleCalendarClick}></i>
          </div>
          <button className="icon-button" onClick={handleNextClick}>
            <i className="bi-chevron-right"></i>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Activity</th>
              <th>17<br />Mon</th>
              <th>18<br />Tue</th>
              <th>19<br />Wed</th>
              <th>20<br />Thu</th>
              <th>21<br />Fri</th>
              <th>22<br />Sat</th>
              <th>23<br />Sun</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10">No Records Found</td>
            </tr>
          </tbody>
        </table>
        <p>Status: Submitted</p>
        <button className="edit-button">Edit</button>

        <h3>Actions Performed on the Timesheet</h3>
        <table className="actions-table">
          <thead>
            <tr>
              <th>Actions</th>
              <th>Performed By</th>
              <th>Date</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>Submitted</td>
              <td>Savanthkumar Malaji</td>
              <td>17-06-2024</td>
              <td></td>
            </tr> */}
          {/* </tbody>
        </table>
    //   </div> */} 
    </div>
  );
};

export default Topbar;

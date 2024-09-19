import React, { useState } from 'react';
import './Time.css';
import './MyAttendanceRecord.css';

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
                  {/* <a href="/ViewReports" role="menuitem" className="oxd-topbar-body-nav-tab-link">View Reports</a> */}
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
    </div>
  );
};

const AttendanceRecords = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [records, setRecords] = useState([]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleViewClick = () => {
    // Fetch records based on the selected date
    // For now, we're setting records to an empty array to match the screenshot
    setRecords([]);
  };

  return (
    <div className="attendance-records">
      <div className="attendance-header">
        <h2>My Attendance Records</h2>
        <hr />
        <div className="date-picker">
          <label htmlFor="date">Date*</label>
          <input 
            type="date" 
            id="date" 
            value={selectedDate} 
            onChange={handleDateChange} 
          />
          <i className="calendar-icon"></i>
        </div>
        <button className="view-button" onClick={handleViewClick}>View</button>
      </div>
      <div className="attendance-content">
        <div className="total-duration">
          <span>Total Duration (Hours): 0.00</span>
        </div>
        {records.length === 0 ? (
          <div className="no-records">No Records Found</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Punch In</th>
                <th>Punch In Note</th>
                <th>Punch Out</th>
                <th>Punch Out Note</th>
                <th>Duration (Hours)</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.punchIn}</td>
                  <td>{record.punchInNote}</td>
                  <td>{record.punchOut}</td>
                  <td>{record.punchOutNote}</td>
                  <td>{record.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const CombinedComponent = () => {
  return (
    <div>
      <Topbar />
      <AttendanceRecords />
    </div>
  );
};

export default CombinedComponent;

import React, { useState, useEffect } from 'react';
import './Time.css';
import './Reports.css';

const Topbar = () => {
  const [isTimesheetsDropdownOpen, setTimesheetsDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
  const [isReportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching data from an API or database
    // Replace with actual data fetching logic
    const fetchData = async () => {
      try {
        // Example API call
        const response = await fetch('https://api.example.com/reports');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReports(data); // Set fetched data to state
        setIsLoading(false); // Data loading complete
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

  const handleSelectReport = (report) => {
    setSelectedReport(report);
  };

  const Report = ({ report, onSelectReport }) => {
    return (
      <li className="report-item" onClick={() => onSelectReport(report)}>
        <h3>{report.title}</h3>
        <p>{report.description}</p>
        <p>Date: {report.date}</p>
        {/* Add more fields as needed */}
      </li>
    );
  };

  const ReportList = ({ reports, onSelectReport }) => {
    return (
      <div className="report-list">
        <h2>Reports</h2>
        {reports.length === 0 && !isLoading ? (
          <p>No reports found.</p>
        ) : isLoading ? (
          <p></p>
        ) : (
          <ul>
            {reports.map((report) => (
              <Report key={report.id} report={report} onSelectReport={onSelectReport} />
            ))}
          </ul>
        )}
      </div>
    );
  };

  const ReportDetails = ({ report }) => {
    if (!report) return null;

    return (
      <div className="report-details">
        <h2>Report Details</h2>
        <h3>{report.title}</h3>
        <p>{report.description}</p>
        <p>Date: {report.date}</p>
        {/* Add more fields as needed */}
      </div>
    );
  };

  const ReportForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic (e.g., API call to add new report)
      console.log('Submitting report:', { title, description });

      // Simulating adding report to UI (replace with actual logic)
      const newReport = {
        id: reports.length + 1, // Replace with actual ID generation logic
        title,
        description,
        date: new Date().toISOString().split('T')[0] // Current date as YYYY-MM-DD
      };

      setReports([...reports, newReport]);
      setTitle('');
      setDescription('');
    };

    return (
      <div className="report-form">
        <h2>Add New Report</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <button type="submit">Submit Report</button>
        </form>
      </div>
    );
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

      <div className="reports-container">
        <div className="left-panel">
          <ReportList reports={reports} onSelectReport={handleSelectReport} />
          <ReportForm />
        </div>
        <div className="right-panel">
          <ReportDetails report={selectedReport} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

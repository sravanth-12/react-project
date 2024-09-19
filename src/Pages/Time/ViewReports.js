import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DetailedReport from './DetailedReport';
import './ViewReports.css'; // Import your CSS file for styling

const ViewReports = () => {
  const [reports, setReports] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  // Simulated data - replace with actual data fetching logic
  useEffect(() => {
    // Example: Fetching reports from an API based on selectedCategory
    // Replace with your actual API call logic
    const fetchReports = async () => {
      try {
        // Simulated response
        const response = await fetch(`https://api.example.com/reports?category=${selectedCategory}`);
        const data = await response.json(); // Assuming JSON response
        setReports(data); // Update state with fetched data
        // Automatically select the first report in the list upon fetching
        if (data.length > 0) {
          setSelectedReport(data[0]);
        } else {
          setSelectedReport(null);
        }
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    // Call the fetchReports function if a category is selected
    if (selectedCategory) {
      fetchReports();
    }
  }, [selectedCategory]); // Fetch reports when selectedCategory changes

  const categories = ['Financial Reports', 'Sales Reports', 'Operational Reports', 'Marketing Reports'];

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectReport = (report) => {
    setSelectedReport(report);
  };

  return (
    <div className="view-reports-container">
      <Sidebar categories={categories} onSelectCategory={handleSelectCategory} />
      <div className="detailed-view">
        {selectedReport ? (
          <DetailedReport report={selectedReport} />
        ) : (
          <div className="no-report-selected">Select a report from the sidebar</div>
        )}
      </div>
    </div>
  );
};

export default ViewReports;

import React from 'react';
import './DetailedReport.css'; // Import your CSS file for styling

const DetailedReport = ({ report }) => {
  return (
    <div className="detailed-report">
      <h2>{report.title}</h2>
      <p>{report.description}</p>
      <p>Generated on: {report.generatedOn}</p>
      <a href={report.downloadLink} className="download-link" target="_blank" rel="noopener noreferrer">
        Download Report
      </a>
    </div>
  );
};

export default DetailedReport;

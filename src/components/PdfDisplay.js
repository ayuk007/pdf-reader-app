// PdfDisplay.js
import React from 'react';
import '../style.css';

const PdfDisplay = ({ pdfData }) => {
  const renderTable = () => {
    return (
      <table className="pdf-table">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(pdfData).map(([key, value]) => (
            <tr key={key}>
              <td className="pdf-key">{key}</td>
              <td>{renderValue(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderValue = (value) => {
    if (typeof value === 'object') {
      // Handle rendering of nested objects or arrays
      return JSON.stringify(value);
    }
    return value;
  };

  return (
    <div>
      <h2>PDF Data:</h2>
      {renderTable()}
    </div>
  );
};

export default PdfDisplay;

// App.js
import React, { useState } from 'react';
import FileInput from './components/FileInput';
import PdfDisplay from './components/PdfDisplay';
import { uploadFile, addRecord } from './service';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfData, setPdfData] = useState(null);
  const [approval, setApproval] = useState(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
    // setPdfData(data);
    setApproval(null);
  };

  const handleFileUpload = async () => {
    try {
      if (selectedFile) {
        const response = await uploadFile(selectedFile);
        setPdfData(response);
        setApproval(null);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleApprovalChange = (event) => {
    setApproval(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (approval && selectedFile) {
        // Add the record to the database
        await addRecord(selectedFile, approval, pdfData);
        // Log the approval status to the console
        console.log(`File approval status: ${approval}`);
      }
    } catch (error) {
      console.error('Error submitting:', error);
    }
  };

  return (
    <div>
      <h1>PDF Reader App</h1>
      <FileInput onFileChange={handleFileChange} onFileUpload={handleFileUpload} />
      {pdfData && <PdfDisplay pdfData={pdfData} />}
      {pdfData && (
        <div>
          <h2>Approve:</h2>
          <label>
            <input
              type="radio"
              value="GE"
              checked={approval === 'GE'}
              onChange={handleApprovalChange}
            />
            GE
          </label>
          <label>
            <input
              type="radio"
              value="NGE"
              checked={approval === 'NGE'}
              onChange={handleApprovalChange}
            />
            NGE
          </label>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;

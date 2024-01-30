// src/components/FileInput.js
import React, { useState } from 'react';

const FileInput = ({ onFileChange, onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    onFileChange(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={onFileUpload}>Read PDF</button>
    </div>
  );
};

export default FileInput;

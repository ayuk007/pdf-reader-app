// service.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Update with your FastAPI backend URL

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${BASE_URL}/uploadfile/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addRecord = async (file, approval, pdfData) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('approval', approval);
    formData.append('pdfData', JSON.stringify(pdfData)); // Send PDF data as JSON string

    const response = await axios.post(`${BASE_URL}/add_record/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 
  // `http://localhost:3000`,
  'https://productfeedback-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    
  },
  // withCredentials:true
});

export default axiosInstance;

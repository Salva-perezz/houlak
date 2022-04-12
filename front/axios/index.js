import axios from 'axios';
require('dotenv').config();

const axiosInstance = axios.create({
  baseURL: process.env.SERVER,
});

export default axiosInstance;
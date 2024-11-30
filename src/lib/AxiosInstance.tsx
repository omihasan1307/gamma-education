import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.binaryhooks.com/api/v1.0',
});


export default axiosInstance;

import axios from "axios";

export const ENV_CONFIG = {
  baseApi: "https://gm.hetdcl.com/api/v1.0",
};

// Safe axios instance
const axiosInstance = axios.create({
  baseURL: ENV_CONFIG.baseApi,
  timeout: 20000, // prevent ECONNRESET
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", {
      url: error?.config?.url,
      message: error?.message,
      code: error?.code,
    });
    return Promise.reject(error);
  },
);

export default axiosInstance;

// import axios from "axios";

// import { ENV_CONFIG } from "@/shared/constant/app.constant";

// const axiosInstance = axios.create({
//   baseURL: ENV_CONFIG.baseApi,
// });

// export default axiosInstance;

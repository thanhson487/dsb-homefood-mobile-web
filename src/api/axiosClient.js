import axios from "axios";
import queryString from "query-string";
import cookieUtils from "./cookieUtils";
import { toast } from "react-toastify";
const axiosClient = axios.create({
  baseURL: "/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers.common["token-id"] = token;
    }
    return config;
  },
  (error) => {
    throw error;
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }

    return Promise.reject(new Error(`Lỗi khi kết nối tới server! `));
  },
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
     
      cookieUtils.removeCookie("token-id");
      localStorage.removeItem("token");
      window.location.href = `https://id-uat.vndirect.com.vn/logout?httpReferer=${window.location.href}`;
    }
    return Promise.resolve(error.response);
  }
);
export default axiosClient;

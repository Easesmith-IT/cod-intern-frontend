import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

export const wpAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WP_API_URL,
  withCredentials: true,
});


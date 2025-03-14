import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://app.ftoyd.com/fronttemp-service",
});

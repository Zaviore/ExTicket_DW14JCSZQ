import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1"
});
export const setAuthToken = token => {
  API.defaults.headers.common["authorization"] = `Bearer ${token}`;
};

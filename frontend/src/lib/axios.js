import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json", // Set the default content type
  },
  withCredentials: true, // Send cookies with requests
});

export default api;

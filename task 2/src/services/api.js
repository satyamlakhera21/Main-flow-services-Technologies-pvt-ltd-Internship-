import axios from "axios";

const API_KEY = "137766ee16f56d636d318e988043c0f7"; // Replace this with your TMDb API Key

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default axiosInstance;

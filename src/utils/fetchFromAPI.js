import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

export const fetchFromAPI = async (url) => {
  const { data } = await axiosInstance({ url: `${BASE_URL}/${url}` });
  return data;
};

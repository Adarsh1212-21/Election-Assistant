import axios from "axios";

const BASE = `${import.meta.env.VITE_API_URL}/api`;

export const fetchTimeline = () => axios.get(`${BASE}/timeline`);

export const fetchBooths = (params) => axios.get(`${BASE}/booths`, { params });

export const sendChat = (message) =>
  axios.post(`${BASE}/chat`, { message });
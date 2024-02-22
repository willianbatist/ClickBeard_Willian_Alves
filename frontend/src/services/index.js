import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    return error
  }
};

export default api;
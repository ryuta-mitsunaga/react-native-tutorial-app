import axios from 'axios';

export const useBaseRepository = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost/api',
  });

  return axiosInstance;
};

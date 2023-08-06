import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // backend server URL
});

export const getCarsForSale = () => {
  return api.get('/cars').then((response) => response.data);
};


export const getLoginRegister = () => {
  return api.get('/login').then((response) => response.data);
};

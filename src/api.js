import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // backend server URL

const api = axios.create({
  baseURL: BASE_URL,
});

export const getCarsForSale = () => {
  return api.get('/cars').then((response) => response.data);
};

export const postSellCar = async (carData) => {
  try {
    const response = await api.post('/sell-your-car', carData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

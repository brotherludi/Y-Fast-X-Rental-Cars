import axios from "axios";

const BASE_URL = "http://localhost:3000"; // backend server URL

const api = axios.create({
  baseURL: BASE_URL,
});

export const getCarsForSale = (includeCompanyInfo = false) => {
  return api
    .get("/cars", { params: { includeCompanyInfo } })
    .then((response) => response.data);
};

export const postSellCar = async (carData) => {
  try {
    const response = await api.post("/sell-your-car", carData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLoginRegister = () => {
  return api.get("/login").then((response) => response.data);
};

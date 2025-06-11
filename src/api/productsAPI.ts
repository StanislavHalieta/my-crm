import HttpService from "../services/HTTPService";
import { IProduct } from "../store/home/types";

const api = new HttpService("https://dummyjson.com", {
  "Content-Type": "application/json",
});

const jwtToken = "";

api.setAuthToken(jwtToken);

export async function fetchProductsAPI() {
  try {
    return await api.get<IProduct[]>("/products");
  } catch (error) {
    return error;
  }
}

export async function fetchProductAPI(productID: string | number) {
  try {
    return await api.get<IProduct[]>(`/products/${productID}`);
  } catch (error) {
    return error;
  }
}

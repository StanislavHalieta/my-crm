import HttpService from "../services/HTTPService";
import { IProduct, IProductsResp } from "../store/home/types";

const api = new HttpService("https://dummyjson.com", {
  "Content-Type": "application/json",
});

const jwtToken = "";

api.setAuthToken(jwtToken);

export async function fetchProductsAPI() {
  try {
    const resp = await api.get<IProductsResp>("/products");

    return resp.data
  } catch (error) {
    return error;
  }
}

export async function fetchProductAPI(productID: string | number) {
  try {
    return await api.get<IProduct>(`/products/${productID}`);
  } catch (error) {
    return error;
  }
}

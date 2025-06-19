import type { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';

import axios from 'axios';

class HttpService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: defaultHeaders,
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        // Можна додати глобальну обробку помилок
        console.error('HTTP Error:', error.response?.status, error.message);
        return Promise.reject(error);
      }
    );
  }

  public setAuthToken(token: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  public removeAuthToken() {
    delete this.axiosInstance.defaults.headers.common['Authorization'];
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  public post<T, TData = unknown>(url: string, data?: TData, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  public put<T>(url: string, data?: Record<string, string>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config);
  }
}

export default HttpService
import axios, { AxiosInstance } from "axios";

class AxiosApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  public getApiInstance() {
    return this.axiosInstance;
  }
}

export default AxiosApi;
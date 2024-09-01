import axios, { AxiosInstance } from "axios";

class AxiosApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  public getAxiosInstance() {
    return this.axiosInstance;
  }
}

export default AxiosApi;
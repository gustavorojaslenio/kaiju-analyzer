import axios, { AxiosInstance } from "axios";

class HTTPService {
  service: AxiosInstance;

  constructor(baseURL: string) {
    this.service = axios.create({
      baseURL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default HTTPService;

import axios, { AxiosInstance } from "axios";

export type GetKaijuTypeApi = "ONE" | "TWO" | "THREE" | "UNKNOWN" | "ALL";

export type KaijuType = "TYPE I" | "TYPE II" | "TYPE III" | "unknown";

type Mode = "raw";

type Raw = { dna: string };

export interface PostKaijuDNAApi {
  mode: Mode;
  raw: Raw;
}

class HttpService {
  service: AxiosInstance;

  static instance = new HttpService();

  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_KAIJU_API_URL,
      timeout: 10000
    });
  }

  async get(kaijuType: GetKaijuTypeApi) {
    return await this.service.get(`/stats?type=${kaijuType}`);
  }

  async post(payload: PostKaijuDNAApi) {
    return await this.service.post("/dna", payload);
  }
}

export default HttpService.instance;

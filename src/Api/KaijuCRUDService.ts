import HTTPService from "./HTTPService";

export type GetKaijuTypeApi = "ONE" | "TWO" | "THREE" | "UNKNOWN" | "ALL";

export type KaijuType = "TYPE I" | "TYPE II" | "TYPE III" | "unknown";

export interface PostKaijuDNAApi {
  dna: string;
}

class KaijuCRUDService extends HTTPService {
  static instance = new KaijuCRUDService();
  constructor() {
    super(process.env.REACT_APP_KAIJU_API_URL!);
  }

  async get(kaijuType: GetKaijuTypeApi) {
    return await this.service.get(`/stats?type=${kaijuType}`);
  }

  async post(payload: PostKaijuDNAApi) {
    return await this.service.post("/dna", payload);
  }
}

export default KaijuCRUDService.instance;

import axios, { AxiosError } from "axios";

class Fetch {
  constructor() {
    this.API_URL = "http://localhost:4000";
  }

  async fetchProductItems() {
    try {
      const response = await axios.get(this.API_URL + "/products");
      return response.data;
    } catch (error) {
      throw new AxiosError("상품 데이터를 불러올 수 없습니다", error.code);
    }
  }

  async sendOrder(totals) {
    try {
      const response = await axios.post(this.API_URL + "/order", { totals });
      return response.data;
    } catch (error) {
      throw new AxiosError("주문 데이터를 보낼 수 없습니다", error.code);
    }
  }
}

export const API = new Fetch();

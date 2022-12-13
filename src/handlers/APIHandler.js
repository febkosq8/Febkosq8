import axios from "axios";
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://febgoserve.me/"
    : "http://localhost:3030";
class APIHandler {

  static async getShortURL(shortName) {
    const response = await axios.get(
      `/shortURL?shortName=${shortName}`
    );
    const data = await response.data;
    return data;
  }
  static async shortURL({shortName,fullURL}){
    const response = await axios.post(
      `/shortURL?shortName=${shortName}&fullURL=${fullURL}`,
    );
    const data = await response.data;
    return data;
  }
}
export default APIHandler;

import axios from "axios";
axios.defaults.baseURL = "https://febgoserve.me";
// axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "https://febgoserve.me" : "http://localhost:3030";
class APIHandler {
	static async getShortURL(shortName: string) {
		const response = await axios.get(`/shortURL?shortName=${shortName}`);
		const data = await response.data;
		return data;
	}
	static async addShortURL({ shortName, fullURL }: { shortName: string; fullURL: string }) {
		const response = await axios.post(`/shortURL?shortName=${shortName}&fullURL=${fullURL}`);
		const data = await response.data;
		return data;
	}
}
export default APIHandler;

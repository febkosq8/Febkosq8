import axios from "axios";
axios.defaults.baseURL =
	process.env.NODE_ENV === "production" ? "https://goserve.febkosq8.me" : "http://localhost:3030";
class APIHandler {}
export default APIHandler;

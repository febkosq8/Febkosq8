export const onRequest: PagesFunction = async (context) => {
	const request = context.request;
	console.log(`Incoming request to ${request.url}`);
	//create a new URL object using the request url
	try {
		const url = new URL(request.url);
		const path = url.pathname;
		console.log(`Path detected : ${path}`);
		// Check if the request is to the /api path
		if (path.startsWith("/api")) {
			console.log(`Proxying request : ${request.url.pathname} to API server`);
			// Proxy the request to your backend API server
			const apiUrl = "https://serve.febkosq8.me";
			const newUrl = new URL(request.url);
			newUrl.host = new URL(apiUrl).host;
			const modifiedRequest = new Request(newUrl, request);

			// Optionally, you can modify headers as needed
			modifiedRequest.headers.set("x-request-ip", request.headers.get("cf-connecting-ip"));

			return fetch(modifiedRequest);
		}
	} catch (e) {}
	// If it's not an API request, let the request proceed without modification
	return fetch(request);
};

export const onRequest: PagesFunction = async (context) => {
	const request = context.request;
	console.log(`Incoming request to ${request.url}`);
	try {
		const url = new URL(request.url);
		const path = url.pathname;
		if (path.startsWith("/api")) {
			console.log(`Proxying request : ${path} to API server`);
			// Proxy the request to your backend API server
			const apiUrl = "https://serve.febkosq8.me";
			const newUrl = new URL(request.url);
			newUrl.host = new URL(apiUrl).host;
			const modifiedRequest = new Request(newUrl, request);

			// Optionally, you can modify headers as needed
			modifiedRequest.headers.set("x-request-ip", request.headers.get("cf-connecting-ip"));

			return fetch(modifiedRequest);
		}
		return await context.next();
	} catch (e) {
		return await context.next();
	}
	// If it's not an API request, let the request proceed without modification
};

/**
 * @param {Request} request
 */
async function onRequest(request) {
	// Check if the request is to the /api path
	if (request.url.pathname.startsWith("/api")) {
		// Proxy the request to your backend API server
		const apiUrl = "https://serve.febkosq8.me";
		const newUrl = new URL(request.url);
		newUrl.host = new URL(apiUrl).host;
		const modifiedRequest = new Request(newUrl, request);

		// Optionally, you can modify headers as needed
		modifiedRequest.headers.set("x-request-ip", request.headers.get("cf-connecting-ip"));

		return fetch(modifiedRequest);
	}

	// If it's not an API request, proceed with the regular request handling
	return fetch(request);
}

// Set up the onRequest event handler
addEventListener("fetch", (event) => {
	event.respondWith(onRequest(event.request));
});

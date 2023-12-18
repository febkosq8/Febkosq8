import "@feb/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});
const isProd = process.env.NODE_ENV === "production";
const backendURL = isProd ? "https://serve.febkosq8.me" : "http://localhost:3030";
ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<SessionProvider baseUrl={backendURL}>
			<QueryClientProvider client={queryClient}>
				<Router>
					<App />
				</Router>
			</QueryClientProvider>
		</SessionProvider>
	</StrictMode>
);

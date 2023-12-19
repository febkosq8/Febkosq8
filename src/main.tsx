import "@feb/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
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
const backendURL = isProd ? "https://serve.febkosq8.me/api/auth" : "http://localhost:3030/api/auth";
ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		<Router>
			<SessionProvider basePath={backendURL}>
				<QueryClientProvider client={queryClient}>
					<App />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</SessionProvider>
		</Router>
	</>
);

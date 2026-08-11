import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		port: 3000,
	},
	build: {
		outDir: "build",
	},
	resolve: {
		alias: {
			"@feb": "/src",
		},
	},
	plugins: [react(), tailwindcss()],
});

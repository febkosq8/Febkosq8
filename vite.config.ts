import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	publicDir: "public",
	server: {
		port: 3000,
		fs: { allow: [".", "../arc"] },
	},
	build: {
		outDir: "build",
	},
	resolve: {
		dedupe: ["react", "react-dom"],
		alias: {
			"@feb": "/src",
		},
	},
	plugins: [react(), tailwindcss()],
});

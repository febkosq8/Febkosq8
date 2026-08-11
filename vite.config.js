import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            "^/api/(.*)$": {
                target: "http://localhost:3030",
                secure: false,
                changeOrigin: true,
            },
        },
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

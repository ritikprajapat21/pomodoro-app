import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "pomodoro-app",
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "screenshot.png",
            sizes: "425X567",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "screenshot3.png",
            sizes: "192X192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "vite.svg",
            sizes: "32X32",
            type: "image/svg",
            purpose: "any",
          },
          {
            src: "screenshot2.png",
            sizes: "12X12",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "screenshot.png",
            sizes: "425X567",
            type: "image/png",
            form_factor: "wide",
            label: "Application",
          },
          {
            src: "screenshot.png",
            sizes: "425X567",
            type: "image/png",
            // form_factor: "wide",
            label: "Application",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: "*",
            handler: "CacheFirst",
            options: {
              cacheName: "pwa-cache",
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
});

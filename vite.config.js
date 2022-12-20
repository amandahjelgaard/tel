// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        produkter: resolve(__dirname, "src/produkter.html"),
        produkt: resolve(__dirname, "src/produkt.html"),
        kurv: resolve(__dirname, "src/kurv.html"),
        betaling: resolve(__dirname, "src/betaling.html"),
        betalingskort: resolve(__dirname, "src/betalingskort.html"),
        kvittering: resolve(__dirname, "src/kvittering.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
      },
    },
  },
});

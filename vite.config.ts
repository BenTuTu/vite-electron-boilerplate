import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default {
  base: "./",
  publicDir: "renderPublic",
  plugins: [vue()],
  build: {
    assetsDir: "./",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        vue: resolve(__dirname, "template/index.html"),
      },
      output: {
        format: "cjs",
        manualChunks: {
          react: ["react"],
          "react-dom": ["react-dom"],
          "react-route-dom": ["react-router-dom"],
        },
      },
    },
    outDir: "buildRender",
  },
};

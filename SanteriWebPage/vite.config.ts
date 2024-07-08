import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/icons/*",
          dest: "assets/icons",
        },
        {
          src: "src/assets/images/*",
          dest: "assets/images",
        },
        {
          src: "src/assets/video/*",
          dest: "assets/video",
        },
      ],
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
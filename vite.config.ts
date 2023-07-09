import { defineConfig } from "vite";
import manifest from "./manifest";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";
import components from "unplugin-vue-components/vite";
import { crx } from "@crxjs/vite-plugin";

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  plugins: [
    vue(),
    crx({ manifest }),
    autoImport({
      dts: true,
      dirs: ["./src/composables"],
      imports: ["vue", "vue-router"],
    }),
    components({
      dts: true,
      directoryAsNamespace: true,
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"],
        },
      ],
      dirs: ["./src/components"],
    }),
  ],
});

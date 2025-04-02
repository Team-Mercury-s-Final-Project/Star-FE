import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    global: {},
  },
  server: {
    // 특정 도메인만 허용하려면 배열에 추가합니다.
    allowedHosts: ["mercurystudy.store"],
    fs: {
      allow: ['./src', './public'] // 명확한 디렉터리만 허용
    }
  },
});

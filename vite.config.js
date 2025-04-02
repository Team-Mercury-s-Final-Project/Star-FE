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
      strict: true, // 파일 시스템 접근을 엄격하게 제한
      allow: ['./src', './public', './node_modules'], // 명확한 디렉터리만 허용
      deny: ["./.git", "./.env", "./.bash_history", "/etc/passwd"] // 민감한 경로 차단
    }
  },
});

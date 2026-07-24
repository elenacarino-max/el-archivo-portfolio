import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/el-archivo-portfolio/",
  plugins: [react()],
});

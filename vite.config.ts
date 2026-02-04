import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "user-data-app";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});

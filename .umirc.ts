import { defineConfig } from "umi";


export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/v-pro-table", component: "VProTable" },
  ],
  npmClient: 'pnpm',
  plugins:[]
});

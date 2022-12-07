import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import sassDts from "vite-plugin-sass-dts"
import checker from "vite-plugin-checker"
import {resolve} from "path"

export default defineConfig({
  plugins: [
    react(),
    sassDts(),
    checker({typescript: true})
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})

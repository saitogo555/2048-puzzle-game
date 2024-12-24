import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vite.dev/config/
const config = defineConfig({
	plugins: [react()],
	base: "./",
})

export default config

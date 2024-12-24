import { defineConfig } from "vitest/config"

const config = defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		include: ["src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["verbose"],
	},
})

export default config

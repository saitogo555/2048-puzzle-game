/** @type {import("tailwindcss").Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"pop-in": {
					0: { scale: "0", opacity: 0 },
					"50%": { scale: "1", opacity: 1 },
				},
			},
			animation: {
				"pop-in": "pop-in .5s ease-in-out forwards",
			},
		},
	},
	plugins: [],
}

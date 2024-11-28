/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			dropShadow: {
				glow: [
					"0px 0px 4px rgb(0, 255, 0)",
					"0px 0px 8px rgb(0, 255, 0)",
				]
			},
			fontFamily: {
				mono: ["JetBrains Mono", "monospace"],
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}

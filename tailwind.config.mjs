/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			dropShadow: {
				glow: [
					"0px 0px 1px rgb(0, 128, 0)",
					"0px 0px 2px rgb(0, 128, 0)",
				]
			},
			fontFamily: {
				mono: ["JetBrains Mono", "monospace"],
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}

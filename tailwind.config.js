/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				'descriptions': ['Plus Jakarta Sans', 'system-ui'],
				'title': ['Clash Display', 'system-ui'],
			}
    },
  },
  plugins: [],
};

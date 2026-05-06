/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        ink: "#0D1117",
        surface: "#161B22",
        card: "#1E2530",
        border: "#2D3748",
        saffron: "#FF9933",
        green: "#138808",
        navy: "#000080",
        accent: "#4F9CF9",
        muted: "#8B98A8",
      },
    },
  },
  plugins: [],
};

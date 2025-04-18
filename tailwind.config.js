/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        popins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
        crimson: "'Crimson Text', serif",
      },
      colors: {
        primary: "#e5e7eb", // gray-200 ,bg color
        primaryLight: "#ffffff", // bg-white, bg color
        secondary: "#1E1B4B", // indigo-950 ,sidbar bg color
        secondaryLight: "#e0e7ff", // bg-indigo-100 ,sidbar active bg color
        lightText: "#abb3c1", //neutral-400,text color
        darkText: "#545860", // neutral-600  ,text color dark
        colorText: "#5a4ab8", //indigo-800 ,sidbar active text color
        accent: "#10B981", // emerald-500
        danger: "#EF4444", // red-500
        warning: "#e6635a", // red-600
        success: "#65b36a", // green-600
        dark: "#111827", // gray-900
        light: "#F9FAFB", // gray-50
        muted: "#6B7280", // gray-500
      },
    },
  },
  plugins: [require("daisyui")],
};

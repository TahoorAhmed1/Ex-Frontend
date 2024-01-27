/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBrown: "#C05E2B",
        web_brown: "#A95225",
        web_dark_brown: "#85401C",
        web_light_green: "#d4ddac32",
        web_light_green_second: "#FAFFE5",
        web_red: "#BE0303",
        web_darkgreen: "#262C0E",
        green : {
          text : "#6F7946",
          background : "#3B4412",
          border : "#525C26",
        }
      },
    },
  },
  plugins: [],
};
 
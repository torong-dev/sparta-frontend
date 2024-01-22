/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#E8344D",
      },
      aspectRatio: {
        image: 275 / 175,
      },
      minWidth: {
        lectureImg: "270px",
      },
    },
  },
  plugins: [],
};

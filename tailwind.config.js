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
      maxWidth: {
        popularityWidth: "1200px",
        popularityLectureWidth: "1152px",
      },
      minWidth: {
        lectureImg: "270px",
      },
      width: {
        recommendWidth: "568px",
        searchWidth: "600px",
      },
      boxShadow: {
        recommendShadow: "0px 8px 24px 0px rgba(95, 102, 107, 0.12)",
      },
      borderRadius: {
        recommendImg: "50%",
        popularity: "100px",
      },
      minHeight: {
        searchHeight: "930px",
      },
    },
  },
  plugins: [],
};

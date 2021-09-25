module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Yaldevi"],
        body: ["Abel"],
      },
      colors: {
        richBlack: "#05080F",
        richBlack2: "#0D1526",
        oxfordBlue: "#14213D",
        dcBlue: "#28427B",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};

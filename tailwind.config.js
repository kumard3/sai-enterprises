// module.exports = {
//   mode: 'jit',
//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-gray": "#EEEDF2",
        "custom-text-blue": "#233484",
        "custom-text-light": "#344B80",
        "custom-light": "#F5F9FF",
        "custom-blue-light": "#7EE0F3",
        "custom-blue-dark": "#64A3FB",
        headblue: "#1d1b84",
        fuchsia:'#E879F9'
      },
      zIndex: {
        auto: "auto",
        negative: -1,
        0: 0,
      },
      keyframes: {
        float: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
          "100%": { transform: "translatey(0px)" },
        },
        floatRev: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(20px)" },
          "100%": { transform: "translatey(0px)" },
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatRev: "floatRev 6s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
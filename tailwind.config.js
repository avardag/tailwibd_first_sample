module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //for extending tailwinds default colors, font sizes, spacing scales etc.
    extend: {
      // colors: {
      //   brand: "#0fa9e6", //will give (to-brand, bg-brand, ring-brand, text-brand, border-brand ...) classes
      //   "brand-light": "#3fbaeb", //will give (to-brand-light, bg-brand-light, ring-brand-light, text-brand-light, border-brand-light ...) classes
      //   "brand-dark": "#0c87b8", //will give (to-dark, bg-dark, ring-dark, text-dark, border-dark ...) classes
      // },
      colors: {
        brand: {
          //can do instead of above
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        //extend fontFamily
        headline: "Poppins, sans-serif", //will give 'font-headline' class in tailwind
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // fontSize:['hover'] // enable change of font size on hover
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

/**  */

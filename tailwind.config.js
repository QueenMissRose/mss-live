/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto\ Mono', 'ui-monospace', 'mono'],
        'milk': ['milk', 'ui-sans-serif', 'sans-serif'],
        
      },
      boxShadow: {
        'boxy': '4px 4px 0px 0px rgba(0, 0, 0, 25%)',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "base-100": "#fbfbfe", //white

          "base-200": "#cfebf7", //light blue for bg

          "base-300": "#ffeda8", //light yellow for bg

          "primary": "#161a35", //text colour, blueish

          "secondary": "#000", //text colour, black

          "accent": "#a2d9f0", //moji blue accent
          
          "accent-content": "#fede65", //moji yellow, like the sun

          "neutral": "#a7dbf0", //how we do it: 2) vision planning 

          "info": "#fce488", //how we do it: 4) develop      
        },
      },
    ],
  },
}
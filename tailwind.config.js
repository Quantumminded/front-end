/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,png}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "b1": "#000814",
    
        "b2": "#003566",
    
        "b3": "#001D3D",
              
        "y1": "#FFC300",
              
        "y2": "#FFD60A",
              
        "y3": "#EBD35C",
              
        "success": "#36D399",
              
        "warning": "#FBBD23",
              
        "error": "#F87272",
        }
    },
  },
  plugins: [ 
    require("daisyui"),
  ],
}
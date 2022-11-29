const { baseConfig } = require("windicss/config");
const { defineConfig } = require("windicss/helpers");
const colors = require("windicss/colors");

/**
 * @type {defineConfig|baseConfig}
 */
module.exports = {
  darkMode: "class",
  attributify: {
    prefix: "_-",
    separator: ":",
  },
  separator: ":",
  shortcuts: {
    'bg-0': "bg-gradient-to-tl from-w-50 to-w-500",
    'header1': "font-f0 font-bold text-7rem"
  },
  theme: {
    screens: {
      // When the width is between 600px and 900px OR above 1100px - change the appearance of <div>
      // @media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px)
      sm: { min: "0px", max: " 640px" }, // phones
      md: {
        raw: "screen and (min-width: 641px) and (max-width: 768px) and (orientation: portrait)",
      }, // 768px, tablet portrait
      md_land: {
        raw: "screen and (min-width: 641px) and (max-width: 768px) and (orientation: landscape)",
      }, // 768px, tablet landscape
      lg: { min: "769px", max: "1024px" }, // desktops
    },
    extend: {
      colors: {
        co1: '#A0B5C5',
        bg: {
          1: '#222124'
        },
        b: {
          900: '#000',
        },
        w: {
          50: '#fff',
          500:'#7C7C7C',
          700: '#D9D9D9'
        }
      },
      boxShadow: {
       
      },
      borderRadius: {
     
      },
      fontFamily: {
        f0: ['Raqami'],
        f1: ["'Press Start 2P'"],
        f2: ["'Janna LT'"],
        f3: ["'Console'"],
      },
      fontWeight: {
      
      },
      
    },
  },
  plugins: [
    require("@windicss/plugin-scrollbar"),
    require("@windicss/plugin-icons"),
  ],
};

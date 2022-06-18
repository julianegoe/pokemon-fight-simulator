module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //ATARI
        "atari-black": "#3d3d3b",
        "atari-red": "#fe5535",
        "atari-brown": "#6a4214",
        "atari-white": "#e3e3e3",
        // SNES
        "snes-black": "#54585a",
        "snes-gray": "#707372",
        "snes-light-gray": "#bfc0bf",
        "snes-red": "#f36f71",
        "snes-green": "#5fb793",
        "snes-yellow": "#fac75f",
        "snes-blue": "#5c81c1",
        // Neu Brutalism
        "nb-red": "#f5724e",
        "nb-green": "#fdc62d",
        "nb-light-green": "#b1ebd2",
        "nb-blue": "#a59ef8",
        "nb-yellow": "#fdc62d",
        // Pokemon type colors
        "pkmn-normal": "#d1c9a2",
        "pkmn-fighting": "#d8bda0",
        "pkmn-flying": "#a5d4c7",
        "pkmn-poison": "#c6a9db",
        "pkmn-ground": "#c4b7a4",
        "pkmn-rock": "#c3c3c3",
        "pkmn-bug": "#d9e0ae",
        "pkmn-ghost": "#caabdc",
        "pkmn-steel": "#b0c8ce",
        "pkmn-fire": "#dfb2b2",
        "pkmn-water": "#acc4db",
        "pkmn-grass": "#b9e6ac",
        "pkmn-electric": "#e7e5b7",
        "pkmn-psycho": "#e0b8e9",
        "pkmn-ice": "#b8dcd6",
        "pkmn-dragon": "#e5b9c0",
        "pkmn-dark": "#9ca4ad",
        "pkmn-fairy": "#dccce3",
      },
      boxShadow: {
        retro: "9px 11px 0px 0px #000000;",
      },
    },
    fontFamily: {
      "press-start": ['"Press Start 2P"', "cursive"],
    },
  },
  plugins: [],
};

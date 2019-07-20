import * as actionTypes from "../actions/themeSwitchAction";
const initialState = {
  darkPalette: {
    palette: {
      primary: {
        light: "#a4a4a4",
        main: `hsl(207, 26%, 17%)`,
        dark: "#494949",
        contrastText: `hsl(0, 0%, 100%)
        `
      },
      secondary: {
        light: "#819ca9",
        main: "#546e7a",
        dark: "#29434e",
        contrastText: "#fff"
      }
    }
  },
  lightPalette: {
    palette: {
      primary: {
        light: "#a4a4a4",
        main: `hsl(0, 0%, 98%)  `,
        dark: "#494949",
        contrastText: `hsl(200, 15%, 8%)`
      },
      secondary: {
        light: "#819ca9",
        main: "#546e7a",
        dark: "#29434e",
        contrastText: "#fff"
      }
    }
  },

  darkMode: false,
  lightMode: true
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME: {
    
      return {
        ...state,
        lightMode: !state.lightMode
      };
    }

    default: {
      return initialState;
    }
  }
};

export default themeReducer;

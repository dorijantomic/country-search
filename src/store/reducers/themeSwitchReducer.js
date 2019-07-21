import * as actionTypes from "../actions/themeSwitchAction";
const initialState = {
  
  currentPalette: {
    palette: {
      primary: {
        light: "#a4a4a4",
        main: `hsl(0, 0%, 100%)`,
        dark: "#494949",
        contrastText: `hsl(200, 15%, 8%)`,
        inputs: 'hsl(0, 0%, 52%)'
      },
      secondary: {
        light: "#819ca9",
        main: "#546e7a",
        dark: "#29434e",
        contrastText: "#fff"
      },
      background: {
        primary: 'hsl(0, 0%, 98%)'
      },
    }
  },

  darkMode: false,
  lightMode: true
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME: {
      const stateCopy = {...state};
      if(stateCopy.lightMode) {
        return {
          ...state,
          lightMode: false,
          currentPalette: {
            palette: {
              primary: {
                light: "#a4a4a4",
                main: `hsl(209, 23%, 22%)`,
                dark: "#494949",
                contrastText: `hsl(0, 0%, 100%)`,
                
              },
              secondary: {
                light: "#819ca9",
                main: "#546e7a",
                dark: "#29434e",
                contrastText: "#fff"
              },
              background: {
                 primary: 'hsl(207, 26%, 17%)'
              },
            }
          },
        }
      } else {
        return {
          ...state,
          lightMode: true,
          currentPalette: {
            palette: {
              primary: {
                light: "#a4a4a4",
                main: `hsl(0, 0%, 100%)`,
                dark: "#494949",
                contrastText: `hsl(200, 15%, 8%)`,
                inputs: 'hsl(0, 0%, 52%)'
              },
              secondary: {
                light: "#819ca9",
                main: "#546e7a",
                dark: "#29434e",
                contrastText: "#fff"
              },
              background: {
                primary: 'hsl(0, 0%, 98%)'
              },
            }
          }
        }
      }
    }

    default: {
      return initialState;
    }
  }
};

export default themeReducer;

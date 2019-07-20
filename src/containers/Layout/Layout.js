import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
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
});
class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Nav />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;

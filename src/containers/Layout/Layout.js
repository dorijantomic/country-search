import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";


class Layout extends Component {
   
  render() {
   
    return (
   
      <MuiThemeProvider theme={this.props.mode ? createMuiTheme(this.props.dark) : createMuiTheme(this.props.light)}>
        <div>
          <Nav />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
    return {
        mode: state.theme.lightMode,
        dark: state.theme.darkPalette,
        light: state.theme.lightPalette
    

    }
}

export default connect(mapStateToProps)(Layout);

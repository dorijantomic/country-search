import React, { Component, Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Form from "../Form/Form";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline"; // CSS Baseline provides a default body backgrond color so That i can now easily change it with the button
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/mapStateToProps";

class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider
        theme={
          createMuiTheme(this.props.palette)
        }
      >
        {console.log(this.props.palette, "theme")}
        <div
          style={{
            height: '100vh',
            display: "flex",
            backgroundColor: this.props.palette.palette.background.primary
          }}
        >
          <CssBaseline />
          <Nav palette={this.props.palette}/>
          <Form palette={this.props.palette}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(Layout);

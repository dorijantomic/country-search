import React, { Component, Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Form from "../Form/Form";
import Cards from '../../components/Cards/Cards'
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
        <Container
          style={{
            minHeight: '100vh',
            minWidth: '100vw',
            display: "flex",
            flexWrap: 'wrap',
            justifyContent:'center',
            backgroundColor: this.props.palette.palette.background.primary
          }}
        >
          <CssBaseline />
          <Nav palette={this.props.palette} />
          <Form palette={this.props.palette} mode={this.props.mode}/>
          <Cards palette={this.props.palette} mode={this.props.mode}/>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(Layout);

import React, { Component, Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Form from "../Form/Form";
import Cards from "../../components/Cards/Cards";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline"; // CSS Baseline provides a default body backgrond color so That i can now easily change it with the button
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { mapThemeToProps } from "../../store/mapThemeToProps";
import * as actionCreators from "../../store/actions/index";
import countriesReducer from "../../store/reducers/fetchCountriesReducer";

class Layout extends Component {
  state = {
    data: null,
    loading: false
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          loading: false
        });
      })
      .catch(err => err);
  }

  render() {
    console.log(this.state, "render of layout");

    return (
      <MuiThemeProvider theme={createMuiTheme(this.props.palette)}>
        {console.log(this.props.palette, "theme")}
        <Container
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: this.props.palette.palette.background.primary
          }}
        >
          <CssBaseline />
          <Nav palette={this.props.palette} />
          <Form palette={this.props.palette} mode={this.props.mode} />
          <Cards
            palette={this.props.palette}
            mode={this.props.mode}
            data={this.state.data}
            loading={this.state.loading}
          />
        </Container>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    palette: state.theme.currentPalette,
    mode: state.theme.lightMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch(actionCreators.fetchBegin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

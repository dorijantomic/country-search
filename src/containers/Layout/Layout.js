import React, { Component, Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Form from "../Form/Form";
import CardsList from "../../components/CardList/CardsList";
import Snackbar from "../../components/Snackbar/Snackbar";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline"; // CSS Baseline provides a default body backgrond color so That i can now easily change it with the button
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

class Layout extends Component {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(this.props.palette)}>
        <Container
          style={{
            minHeight: "100vh",
            minWidth: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: this.props.palette.palette.background.primary
          }}
        >
          <CssBaseline />
          <Nav palette={this.props.palette} />
          <Form palette={this.props.palette} mode={this.props.mode}  data={this.props.data}/>
          {this.props.data!== null && this.props.data.status && !this.props.loading ? (
            <Snackbar />
          ) : (
            <CardsList
              name={this.props.name}
              data={this.props.data}
              palette={this.props.palette}
              mode={this.props.mode}
              loading={this.props.loading}
            />
          )}
        </Container>
        
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    palette: state.theme.currentPalette,
    mode: state.theme.lightMode,
    data: state.countries.reduxData,
    loading: state.countries.loading,
    name: state.countries.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch(actionCreators.fetchAllCountries())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

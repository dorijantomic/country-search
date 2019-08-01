import React from "react";

import CountryCard from "../Card/CountryCard";
import Snackbar from "../Snackbar/Snackbar";
import { withStyles } from "@material-ui/core/styles";

import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
const styles = theme => ({
  card: {
    [theme.breakpoints.up("900")]: {
      maxWidth: 255
    },
    [theme.breakpoints.up("1200")]: {
      maxWidth: 260
    },
    [theme.breakpoints.up("1300")]: {
      maxWidth: 270
    },
    [theme.breakpoints.up("1500")]: {
      maxWidth: 345
    },

    maxHeight: "100%"
  },

  cardsContainer: {
    width: "100vw"
  },
  paper: {
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main
  },
  gridContainer: {
    backgroundColor: theme.palette.background.primary
  },
  gridItem: {
    marginBottom: "75px"
  }
});
const Cards = props => {
  console.log(props);
  const { classes, palette } = props;

  let countryData;
  let countries = [];
  if (props.name !== null) {
    countryData = props.data.filter(country =>
      country.name.toLocaleLowerCase().includes(props.name.toLocaleLowerCase())
    );
  }
  console.log("country data is", countryData);

  if (props.loading === false && props.data !== null && props.name === null) {
    countries = [];
    props.data.map((country, i) => {
      return countries.push(
        <CountryCard country={country} palette={palette} />
      );
    });
  } else if (props.name !== null && countryData !== undefined) {
    countries = [];
    countryData.map((country, i) => {
      return countries.push(
        <CountryCard country={country} palette={palette} />
      );
    });
  } else {
    countries = [];
    countries.push(<h1>Loading...</h1>);
  }

  return (
    <div className={classes.cardsContainer}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.gridContainer}
        color="primary"
      >
        {  countryData!== undefined  && countryData.length === 0? (
          <Snackbar />
        ) : (
          countries
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(actionCreators.fetchAllCountries())
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cards)
);

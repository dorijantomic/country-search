import React, { Component } from "react";
import { withStyles, Hidden } from "@material-ui/core";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import humanizeList from "humanize-list";
import { Link } from "react-router-dom";
import Navigation from "../../components/Nav/Nav";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Box,
  Typography
} from "@material-ui/core";

import ArrowBack from "@material-ui/icons/ArrowBack";
const styles = theme => ({
  container: {
    minHeight: "100vh",
    paddingTop: 80,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 120
    }
  },
  box: {
    width: 100,
    marginBottom: 30,
    marginLeft: 20,
    height: 40,
    position: "relative",

    "&:hover": {
      backgroundColor: theme.palette.action.hover + "!Important"
    }
  },

  label: {
    position: "relative",
    bottom: "5px"
  },
  link: {
    textDecoration: "none"
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },

  button: {
    marginTop: "10px"
  },

  CardActions: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexFlow: "row wrap",
      margin: "0 0 0 7%",
      overflow: "hidden"
    }
  },
  ActionArea: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: 'end',
      marginLeft: '5%'
    }
  },
  flag: {
    maxWidth: "90%",
    height: "auto",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 360,
      maxHeight: 240,
      margin: "0"
    }
  },
  countryInfoA: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      maxWidth: 500
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      maxWidth: 900
    }
  },
  countryInfoB: {
    [theme.breakpoints.up("md")]: {
      alignSelf: "center"
    }
  }
});

class CountryProfile extends Component {
  state = {
    country: null
  };

  handleClick = e => {
    //debugger
    this.props.history.listen((location, action) => {
      fetch(
        `https://restcountries.eu/rest/v2/alpha?codes=${this.props.history.location.pathname.substring(
          1
        )}`
      )
        .then(res => res.json())
        .then(res => {
          this.setState({
            country: res
          });
        });
    });
  };
  componentDidMount() {
    //debugger
    if (this.props.location.pathname.length > 4) {
      fetch(
        `https://restcountries.eu/rest/v2/name/${this.props.location.pathname.substring(
          1
        )}?fullText=true`
      )
        .then(res => {
          let a = res.json();
          console.log(a);
          return a;
        })
        .then(res => {
          this.setState({
            country: res
          });
        });
    } else {
      fetch(
        `https://restcountries.eu/rest/v2/alpha?codes=${this.props.history.location.pathname.substring(
          1
        )}`
      )
        .then(res => res.json())
        .then(res => {
          this.setState({
            country: res
          });
        });
    }
  }
  render() {
    console.log(this.state.country, "state");
    const { classes } = this.props;
    return (
      <div style={{}}>
        <MuiThemeProvider theme={createMuiTheme(this.props.palette)}>
          <Navigation palette={this.props.palette} />
          <div
            className={classes.container}
            style={{
              backgroundColor: this.props.palette.palette.background.primary
            }}
          >
            <Box
              boxShadow={1}
              className={classes.box}
              style={{
                backgroundColor: this.props.palette.palette.primary.main
              }}
            >
              <IconButton
                className={classes.iconButton}
                disableRipple={true}
                disableFocusRipple={true}
                style={{
                  color: this.props.palette.palette.primary.contrastText
                }}
                classes={{
                  label: classes.label,
                  root: classes.root
                }}
              >
                <ArrowBack />
                <Typography variant="subtitle1" color="textPrimary">
                  Back
                </Typography>
              </IconButton>
            </Box>

            {this.state.country !== null
              ? this.state.country.map(country => (
                  <Card
                    style={{
                      width: "100%",
                      minHeight: "100vh",
                      backgroundColor: this.props.palette.palette.background
                        .primary
                    }}
                  >
                    <CardActionArea className={classes.ActionArea}>
                      <CardMedia
                        className={classes.flag}
                        component="img"
                        alt={country.name}
                        height="140"
                        image={country.flag}
                        title={country.name}
                      />
                      <div className={classes.countryInfoA}>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            color="textPrimary"
                          >
                            {country.name}
                          </Typography>
                          <Typography variant="body2" component="p">
                            <strong>Native Name:</strong> {country.nativeName}
                          </Typography>
                          <Typography variant="body2" component="p">
                            <strong>Population:</strong>{" "}
                            <NumberFormat
                              value={country.population}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </Typography>
                          <Typography variant="body2" component="p">
                            <strong>Region:</strong> {country.region}
                          </Typography>
                          <Typography variant="body2" component="p">
                            <strong>Sub Region:</strong> {country.subregion}
                          </Typography>
                          <Typography variant="body2" component="p">
                            <strong>Capital:</strong> {country.capital}
                          </Typography>
                        </CardContent>
                        <CardContent className={classes.countryInfoB}>
                          <Typography variant="body2" component="p">
                            <strong>Top Level Domain:</strong>{" "}
                            {country.topLevelDomain}
                          </Typography>
                          <Typography variant="body2" component="p">
                            <strong>Currencies:</strong>{" "}
                            {country.currencies.map(currency => currency.name)}
                          </Typography>
                          <Typography variant="body2" component="p">
                            <strong>Languages:</strong>{" "}
                            {humanizeList(
                              country.languages.map(language => language.name)
                            )}
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.CardActions}>
                          <Typography
                            variant="body2"
                            component="p"
                            style={{ minWidth: "100vw" }}
                            color="textPrimary"
                          >
                            <strong>Border Countries:</strong>
                          </Typography>
                          {country.borders.map((country, i) => (
                            <Link
                              className={classes.link}
                              to={`/${country}`}
                              onClick={e => this.handleClick(e)}
                            >
                              <Button
                                key={i}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                              >
                                {country}
                              </Button>
                            </Link>
                          ))}
                        </CardActions>
                      </div>
                    </CardActionArea>
                  </Card>
                ))
              : null}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.countries.reduxData,
    palette: state.theme.currentPalette,
    mode: state.theme.lightMode
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchSpecificCountry: e => dispatch(actionCreators.fetchSpecficCountry(e)),
    fetchCountries: data => dispatch(actionCreators.fetchAllCountries(data)),
    fetchRegion: e => dispatch(actionCreators.fetchRegion(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CountryProfile));

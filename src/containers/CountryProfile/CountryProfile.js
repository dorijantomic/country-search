import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import humanizeList from "humanize-list";
import { Link } from "react-router-dom";
import Navigation from '../../components/Nav/Nav'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

class CountryProfile extends Component {
  state = {
    country: null
  };

  handleClick = e => {
debugger
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
debugger
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

    return (
      <div style={{}}>
         <MuiThemeProvider theme={createMuiTheme(this.props.palette)}>
        <Navigation palette={this.props.palette}/>
        {this.state.country !== null
          ? this.state.country.map(country => (
              <Card style={{ width: "100%", height: "100vh" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={country.name}
                    height="140"
                    image={country.flag}
                    title={country.name}
                  />
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
                  <CardContent>
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
                  <CardActions>
                    <Typography variant="body2" component="p">
                      <strong>Border Countries:</strong>
                    </Typography>
                    {country.borders.map((country, i) => (
                      <Link
                        to={`/${country}`}
                        onClick={e => this.handleClick(e)}
                      >
                        <Button key={i}>{country}</Button>
                      </Link>
                    ))}
                  </CardActions>
                </CardActionArea>
              </Card>
            ))
          : null}
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
)(CountryProfile);

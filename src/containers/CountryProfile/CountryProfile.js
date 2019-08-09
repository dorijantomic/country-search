import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom'

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
  componentDidMount() {
    fetch(
      `https://restcountries.eu/rest/v2/name/${this.props.location.pathname.substring(
        1
      )}`
    )
      .then(res => res.json())
      .then(res => {
        let [country] = res;
        this.setState({
          country: country,
         
        });
      });
  }
  render() {
    console.log(this.state, 'state');
    
    return (
      <div style={{}}>
        <Card style={{width: '100%', height: '100vh'} }>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={this.state.name}
            height="140"
            image={this.state.flag}
            title={this.state.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="textPrimary"
            >
              {this.state.name}
            </Typography>
            <Typography variant="body2" component="p">
              <strong>Native Name:</strong> {this.state.country.nativeName} 
            </Typography>
            <Typography variant="body2" component="p">
              <strong>Population:</strong> <NumberFormat value={this.state.population} displayType={'text'} thousandSeparator={true}/> 
            </Typography>
            <Typography variant="body2" component="p">
              <strong>Region:</strong> {this.state.region}
            </Typography>
            <Typography variant="body2" component="p">
              <strong>Capital:</strong> {this.state.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
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
)(withStyles()(CountryProfile));

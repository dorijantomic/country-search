import React from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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

  paper: {
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main
  },

  gridItem: {
    marginBottom: "75px"
  }
});
const CountryCard = props => {
  const { classes } = props;

  return (
    <Grid item xs={12} sm={12} md={4} lg={3} className={classes.gridItem}>
      <Card
        style={{ backgroundColor: props.palette.palette.primary.main }}
        className={classes.card}
        classes={{ root: classes.paper }}
        key={props.country.name}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "inherit"
          }}
          to={{
            pathname: `/${props.country.name}`,
            state: {
              name: props.country.name,
              nativeName: props.country.nativeName,
              flag: props.country.flag,
              population: props.country.population,
              region: props.country.region,
              subRegion: props.country.subregion,
              capital: props.country.capital,
              topLevelDomain: props.country.topLevelDomain,
              currencies: props.country.currencies,
              languages: props.country.languages,
              borderCountries: props.country.borders
            }
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.country.name}
              height="140"
              image={props.country.flag}
              title={props.country.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textPrimary"
              >
                {props.country.name}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>Population:</strong>{" "}
                <NumberFormat
                  value={props.country.population}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Typography>
              <Typography variant="body2" component="p">
                <strong>Region:</strong> {props.country.region}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>Capital:</strong> {props.country.capital}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(CountryCard);

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
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
    maxWidth: 345,

    maxHeight: "100%"
  },

  cardsContainer: {
    display: "flex",
    maxWidth: "100%",
    flexFlow: "row wrap",
    justifyContent: "center"
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
  console.log(props)
  const { classes } = props;

  const { palette } = props;
  return (
    <div className={classes.cardsContainer}>
      <Grid
        container
        xs={12}
        className={classes.gridContainer}
        color="primary"
      />

      {props.loading === false && props.data !== null ? (
        props.data.map((country, i) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={3}
              className={classes.gridItem}
            >
              <Card
                style={{ backgroundColor: palette.palette.primary.main }}
                className={classes.card}
                classes={{ root: classes.paper }}
                key={country.name}
              >
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small" color="default">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })
      ) : (
        <h1>Loading ...</h1>
      )}
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

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
const styles = theme => ({
  card: {
    maxWidth: 345,
    maxHeight: "100%"
  },
  paper: {
    background: theme.palette.primary.main
  },
  cardsContainer: {
    display: "flex",
    maxWidth: "100%",
    flexFlow: "row wrap",
    justifyContent: "center"
  }
});
const Cards = props => {
  const { classes } = props;

  console.log(props.data, "cards");
  return (
    <div className={classes.cardsContainer}>
      {props.loading === false && props.data !== null ? (
        props.data.map((country, i) => {
          return (
            <Card
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
                <Button size="small" onClick={() => props.onClick()}>
                  Share
                </Button>
                <Button size="small" color="default">
                  Learn More
                </Button>
              </CardActions>
            </Card>
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
    onClick: () => dispatch(actionCreators.fetchBegin())
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cards)
);

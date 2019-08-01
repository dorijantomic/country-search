import React from "react";
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
const CountryCard = (props) => {
    const {classes} = props
  return (
    <Grid item xs={12} sm={12} md={4} lg={3} className={classes.gridItem}>
      <Card
        style={{ backgroundColor: props.palette.palette.primary.main }}
        className={classes.card}
        classes={{ root: classes.paper }}
        key={props.country.name}
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
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
};

export default withStyles(styles)(CountryCard);

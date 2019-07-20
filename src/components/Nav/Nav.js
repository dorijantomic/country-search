import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core";
import Brightness from "@material-ui/icons/Brightness2Outlined";


const styles = theme => ({
  title: {
    
    // Match [md, ∞[
    //       [960px, ∞[
    [theme.breakpoints.down("xs")]: {

      fontSize: "15px",
      fontWeight: "700"
    }
  },

  toolbar: {
    [theme.breakpoints.down("xs")]: {
      minHeight: 96
    }
  },

  themeSwitcher: {
    marginLeft: 'auto'
 
  },

  themeSwitcherText: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
});

const Nav = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar color='primary'>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h4">
            Where in the World?
          </Typography>
          <IconButton className={classes.themeSwitcher}>
            <Brightness />
            <Typography variant="button" className={classes.themeSwitcherText}>
              Dark Mode
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Nav);

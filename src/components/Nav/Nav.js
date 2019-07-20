import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core";
import Brightness from "@material-ui/icons/Brightness2Outlined";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/themeSwitchAction'
import { sizeHeight } from "@material-ui/system";

const styles = theme => ({
  title: {
    fontWeight: "600",
    fontSize: 23,
    // Match [md, ∞[
    //       [960px, ∞[
    [theme.breakpoints.down("xs")]: {

      fontSize: "15px",
      fontWeight: "800"
    }
  },

  toolbar: {
      minHeight: 52,
    [theme.breakpoints.down("xs")]: {
      minHeight: 96
    }
  },

  themeSwitcher: {
    marginLeft: 'auto',
    color: theme.palette.primary.contrastText
 
  },

  themeSwitcherText: {
      fontWeight: 400,
      fontSize: 16,
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
            Where in the world?
            {}
          </Typography>
          <IconButton className={classes.themeSwitcher} onClick={props.onClick} >
            <Brightness />
            <Typography variant="button" className={classes.themeSwitcherText} variant='h6'>
              Dark Mode
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
    palette: state.theme.lightMode
})

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch({type: actionTypes.SWITCH_THEME})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));

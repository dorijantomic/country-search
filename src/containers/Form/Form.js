import React from "react";
import {
  Select,
  OutlinedInput,
  FormControl,
  InputLabel
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/mapStateToProps";
import { withStyles } from "@material-ui/core/styles";
const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const styles = theme => ({
  form: {
    display: "flex",
    paddingTop: 92,
    [theme.breakpoints.up("xs")]: {
      paddingTop: 120,
      flexFlow: "column"
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 120,
      flexFlow: "row",
      width: "100%",
      justifyContent: "space-between"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 120,
      flexFlow: "row",
      width: "100%",
      justifyContent: "space-between"
    }
  },

  formControl: {
    [theme.breakpoints.up("md")]: {
      width: "23%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "33%"
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "100%",
      width: "auto"
    },
    [theme.breakpoints.up("lg")]: {
      width: "20%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "18%"
    }
  },

  inputLabel: {
    color: theme.palette.primary.contrastText
  },
  input: {
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
    backgroundColor: mapStateToProps.mode
      ? theme.palette.primary.inputs
      : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginBottom: "22px"
  },
  selectList: {
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
    maxWidth: "320px",
    backgroundColor: mapStateToProps.mode
      ? theme.palette.primary.inputs
      : theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },

  search: {
    position: "relative",
    marginLeft: 0,
    width: "100%"
  },
  searchIcon: {
  
    width: theme.spacing(9),
    height: "77%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
    color: theme.palette.primary.contrastText
  },

  insideInput: {
    marginLeft: "45px"
  }
});
const Form = props => {
  const { classes } = props;
  const { palette } = props.palette;
  return (
    <form action={e => e.preventDefault()} className={classes.form}>
      <FormControl>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>

          <OutlinedInput
            placeholder=" Search for a country ..."
            className={classes.input}
            classes={{ input: classes.insideInput }}
          />
        </div>
      </FormControl>
      {console.log(palette)}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>Filter By Region</InputLabel>
        <Select
          native
          className={classes.selectList}
          classes={{ root: classes.options }}
          input={
            <OutlinedInput
              name="filter by region"
              id="outlined-age-native-simple"
            />
          }
        >
          <option
            value=""
            style={{ backgroundColor: palette.primary.main }}
            classes={classes.options}
          />
          {options.map(option => {
            return (
              <option
                style={{ backgroundColor: palette.primary.main }}
                classes={classes.options}
              >
                {option}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
};

export default withStyles(styles)(Form);

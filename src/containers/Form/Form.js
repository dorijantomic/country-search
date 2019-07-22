import React from "react";
import {
  NativeSelect,
  OutlinedInput,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/mapStateToProps";
import { withStyles } from "@material-ui/core/styles";
const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const styles = theme => ({
  form: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 120,
      flexFlow: "column"
    }
  },

  inputLabel: {
    color: theme.palette.primary.contrastText
  },
  input: {
    backgroundColor: mapStateToProps.mode ? theme.palette.primary.inputs : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginBottom: '22px'
  },
  selectList: {
    backgroundColor: mapStateToProps.mode ? theme.palette.primary.inputs : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

  },
 
  options: {
    display: "none",
    "&:hover": {
      backgroundColor: "#f00"
    }
  }
});
const Form = props => {
  const { classes } = props;
  const { palette } = props.palette;
  return (
    <form action={e => e.preventDefault()} className={classes.form}>
      <FormControl>
        <OutlinedInput
          placeholder="Search for a country ..."
          className={
           classes.input
          }
        />
      </FormControl>
      {console.log(palette)}
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel style={{ color: palette.primary.contrastText }}>
          Filter By Region
        </InputLabel>
        <NativeSelect
          variant="outlined"
          defaultValue="Filter by Region"
          className={
            classes.selectList
          }
          name="Filter By Region"
          classes={{ selectMenu: classes.options }}
        >
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
        </NativeSelect>
      </FormControl>
    </form>
  );
};

export default withStyles(styles)(Form);

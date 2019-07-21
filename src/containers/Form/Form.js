import React from "react";
import { Select, OutlinedInput } from "@material-ui/core";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/mapStateToProps";
import { withStyles } from "@material-ui/core/styles";
const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const styles = theme => ({
  inputs: {
    backgroundColor: theme.palette.primary.main
  },
  inputsLight: {
    backgroundColor: theme.palette.primary.inputs
  },
  inputLabel: {
    color: theme.palette.primary.contrastText
  },
  selectListDark: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  selectListLight: {
    backgroundColor: theme.palette.primary.inputs,
    color: theme.palette.primary.contrastText
  }
});
const Form = props => {
  const { classes } = props;
  return (
    <form action={e => e.preventDefault()} style={{ marginTop: 150 }}>
      <OutlinedInput
        className={
          props.lightMode ? classes.selectListLight : classes.selectListDark
        }
      />
      <Select
        className={
          props.lightMode ? classes.selectListLight : classes.selectListDark
        }
      >
        {options.map(option => {
          return <option>{option}</option>;
        })}
      </Select>
    </form>
  );
};

export default withStyles(styles)(Form);

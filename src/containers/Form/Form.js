import React from "react";
import {
  Select,
  OutlinedInput,
  FormControl,
  InputLabel
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { connect } from "react-redux";
import * as actionCreators from '../../store/actions/index'
import { mapThemeToProps } from "../../store/mapThemeToProps";
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
    },
    paddingBottom: '20px'
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
    backgroundColor: mapThemeToProps.mode
      ? theme.palette.primary.inputs
      : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginBottom: "22px"
  },
  selectList: {
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
    maxWidth: "320px",
    backgroundColor: mapThemeToProps.mode
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

  const handleChange = (e) => {
    const target = e.target.value
    if(target === '' || target === 'undefined') {
      return props.fetchCountries()
    } else {
      setTimeout((e) => {
        props.fetchSpecificCountry(target)
      }, 500  )
    
    }
  }

  const handleRegionChange = (e) => {
    const target = e.target.value;
    
  if(target === '' || target === 'undefined') {
      return null
    } else {
        props.fetchRegion(target)
    }
  
  }
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
            onChange={(e) => handleChange(e)}
            placeholder=" Search for a country ..."
            className={classes.input}
            classes={{ input: classes.insideInput }}
          />
        </div>
      </FormControl>
 
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>Filter By Region</InputLabel>
        <Select
          onChange={handleRegionChange}
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
                
                key={option}
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
const mapStateToProps = state => {
  return {
    palette: state.theme.currentPalette,
    mode: state.theme.lightMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpecificCountry: (e) => dispatch(actionCreators.fetchSpecficCountry(e)),
    fetchCountries: () => dispatch(actionCreators.fetchAllCountries()),
    fetchRegion: (e) => dispatch(actionCreators.fetchRegion(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Form));

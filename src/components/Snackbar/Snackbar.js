import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from '@material-ui/core/Button'
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";




const Snack = (props) => {
    const handleClick = () => {
        props.onClick()
    }
  return (
    <div>
   
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={true}
        autoHideDuration={6000}
        /*onClose={handleClose}*/
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Country not found</span>}
        action={[
          <Button
            key="undo"
            style={{color:'#61cdff'}}
            size="small"
           onClick={handleClick}
           
          >
            UNDO
          </Button>,
     
        ]}
      />
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

export default connect(mapStateToProps,mapDispatchToProps)(Snack);

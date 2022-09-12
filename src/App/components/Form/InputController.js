import React, { Component } from "react";
import { TextField } from "@mui/material";
import { withFormsy } from "formsy-react";
import  {connect}  from "react-redux";


class InputController extends Component {

  changeValue = (e) => {
    this.props.setValue(e.target.value);
  console.log(this.props.value)
    
   if(e.target.value.length > 5 ){
    this.props.searchUsername(this.props.reduxAction,e.target.value)
   }else{
    return false
   }

  };
  render() {
   
    const error = this.props.value && this.props.errorMessage ? true : false;
    const { name, label, variant, type, id, rows, multiline,inputProps,dynamic,dynamicError } = this.props;
    
    return (
      <>
        <TextField
          id={id || ""}
          InputProps={{endAdornment:error?null:this.props.value == ""?null :inputProps}}
          multiline={false || multiline}
          rows={0 || rows}
          onChange={this.changeValue}
          value={this.props.value || ""}
          name={name}
          variant={variant || "outlined"}
          label={label || ""}
          type={type || "text"}
          error={error ||dynamic }
          helperText={dynamic?dynamicError:error ? this.props.errorMessage : ""}
          autoComplete="off"


        > </TextField>

      </>
    );
  }
}


const mapDispatchToProps = (dispatch)=>{
  return {
    searchUsername : (type,data)=>{
   if(type){
    dispatch({type,payload : data})
   }else{
    return false
   }
    }

  }
}


export default connect(null,mapDispatchToProps)(withFormsy(InputController))

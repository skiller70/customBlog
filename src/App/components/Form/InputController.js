import React, { Component } from "react";
import { TextField } from "@mui/material";
import { withFormsy } from "formsy-react";

class InputController extends Component {
  constructor(props) {
    super(props);
  }

  changeValue = (e) => {
    this.props.setValue(e.target.value);
  };
  render() {
    const error = this.props.value && this.props.errorMessage ? true : false;
    const { name, label, variant,type } = this.props;

    return (
      <>
     
        <TextField
          onChange={this.changeValue}
          value={this.props.value || ""}
          name={name}
          variant={variant || "outlined"}
          label={label}
          type={type || "text" }
          error={error}
          helperText={error ? this.props.errorMessage : ""}
          autoComplete="none"
        ></TextField>
      </>
    );
  }
}

export default withFormsy(InputController);

import { withFormsy } from "formsy-react";
import { TextField } from "@mui/material";
import React, { Component } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

class DateOfBirth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    const error = this.props.value && this.props.errorMessage ? true : false;

    return (
      <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
        
            label="Date of Birth"
            value={this.props.value}
            name={name}
         
            onChange={(newValue) => {
              console.log(newValue)
              this.props.setValue(newValue);
            }}
            renderInput={(params) => <TextField    {...params}  error={error} helperText={error ? this.props.errorMessage : null}/>}
          />
        </LocalizationProvider>
      </>
    );
  }
}

export default withFormsy(DateOfBirth);

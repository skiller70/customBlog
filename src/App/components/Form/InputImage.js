import React, { Component } from "react";
import { withFormsy } from "formsy-react";

class InputImage extends Component {
  changeValue = (e) => {
    this.props.setValue(e.target.files[0]);
  };
  render() {
    const { name } = this.props;

    return (
      <input hidden name={name} type="file" accept="image/*" onChange={this.changeValue}></input>
    );
  }
}

export default withFormsy(InputImage);

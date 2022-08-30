import React, { Component } from "react";
import { withFormsy } from "formsy-react";

class InputImage extends Component {
  changeValue = (e) => {
    this.props.setValue(e.target.value);
  };
  render() {
    const { name } = this.props;
    return (
      <input
        onChange={this.changeValue}
        name={name}
        hidden
        type="file"
        accept="image/*"
      ></input>
    );
  }
}

export default withFormsy(InputImage);

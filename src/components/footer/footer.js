import React, { Component } from "react";
import { Date } from "core-js";

export default class Footer extends Component {
  displayCopyright = () => {
    // document.write(new Date().getFullYear());
  } 
  render() {
    console.log(this.props);
    return(
      <footer>
        {this.displayCopyright()}
      </footer>
    )
  }
}
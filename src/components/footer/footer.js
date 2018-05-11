import React, { Component } from "react";
import { Date } from "core-js";

export default class Footer extends Component {
  displayCopyright = () => {
    // document.getElementsByClassName('footer');
    // new Date().getFullYear()
    return (
      <p>Copyright &copy;   </p>
    )
  } 
  render() {
    console.log(this.props);
    return(
      <footer className="footer">
        {this.displayCopyright()}
      </footer>
    )
  }
}
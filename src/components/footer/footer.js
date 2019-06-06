import React, { Component } from "react";
import './footer.scss';

export default class Footer extends Component {
  displayCopyright = () => {
    let today = new Date();
    let year = today.getFullYear();
    return (
      <p>Copyright &copy; {year}</p>
    )
  };
  render() {
    return(
      <footer className="footer">
         {this.displayCopyright()}
      </footer>
    )
  }
}

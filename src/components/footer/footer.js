import React, { Component } from "react";

export default class Footer extends Component {
  displayCopyright = () => {
    let today = new Date;
    let year = today.getFullYear();
    return (
      <p>{year}</p>
    )
  } 
  render() {
    console.log(this.props);
    return(
      <footer className="footer">
        Copyright &copy; {this.displayCopyright()}
      </footer>
    )
  }
}
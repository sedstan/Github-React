import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
  displayCopyright = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <p>
        Copyright &copy;
        {year}
      </p>
    );
  };

  render() {
    return <footer className="footer" aria-roledescription="contentinfo">{this.displayCopyright()}</footer>;
  }
}

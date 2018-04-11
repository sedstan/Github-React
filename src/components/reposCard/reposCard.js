import React, { Component } from "react";
import './reposCard.css';
// import InnerCard from "../innerCard/innerCard";

class ReposCard extends Component {
  render() {   
    console.log(this.props.data.current && this.props.data.current.repositories.edges[0].node) 
    return (
      <section>
        <div>
          {this.props.data.current && this.props.data.current.repositories.edges[0].node}
        </div>
      </section>
    )
  }
}

export default ReposCard;
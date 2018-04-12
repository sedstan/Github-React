import React, { Component } from "react";
import './reposCard.css';
import InnerCard from "../innerCard/innerCard";

class ReposCard extends Component {
  render() {
    return (
      <section className="repos">
        {this.props.data.current && this.props.data.current.repositories.edges.map((item, index) => {
          return (
            <div className="repos-card" key={index}>
              <a href={item.node.url}>
                <h4>{item.node.name}</h4>
                <p>{item.node.description}</p>
              </a>
            </div>
          )
        })}
      </section>
    )
  }
}

export default ReposCard;
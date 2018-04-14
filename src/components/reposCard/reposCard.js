import React, { Component } from "react";
import './reposCard.css';

class ReposCard extends Component {
  render() {
    return (
      <section className="repos">
        {this.props.data.current && this.props.data.current.repositories.edges.map((item, index) => {
          return (
            <div className="repos-card" key={index}>
              <div className="repost-card-inner">
                <a href={item.node.url}>
                  <h4>{item.node.name}</h4>
                  <p>{item.node.description}</p>
                </a>
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}

export default ReposCard;
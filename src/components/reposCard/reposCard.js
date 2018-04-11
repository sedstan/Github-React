import React, { Component } from "react";
import './reposCard.css';
// import InnerCard from "../innerCard/innerCard";

class ReposCard extends Component {
  displayRepos = () => {
    return this.props.data.current && this.props.data.current.repositories.edges.map((item) => {
      {item.node}
    })
  }
  render() {   
    // console.log(this.props.data.current && this.props.data.current.repositories.edges) 
    return (
      <section>
        <div>
          {/* TODO: map this data */}
          {this.props.data.current && this.props.data.current.repositories.edges.map((item) => {
            return (
              <div>
                <a href={item.node.url}>
                  <h4>{item.node.name}</h4>
                  <p>{item.node.description}</p>
                </a>
              </div>
            )
           
          })}
        </div>
      </section>
    )
  }
}

export default ReposCard;
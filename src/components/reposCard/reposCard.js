import React, { Component } from "react";
import './reposCard.css';

class ReposCard extends Component {
  render() {    
    return (
      <section className="repos">
        {this.props.data.current && this.props.data.current.repositories.edges.map((item, index) => {
          console.log(this.props.data.current.repositories.edges)
          return (
            <div className="repos-card" key={index}>
              <div className="repos-card--inner">
                <a href={item.node.url}><h4>{item.node.name}</h4></a>
                  <p>{item.node.description}</p>
                  {item.node.languages.edges.map((lang, i) => {
                    return (
                      <div className="repos-card--inner--lang" key={i}>
                        <p>{lang.node.name}</p>
                      </div>
                    )
                  })}
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}

export default ReposCard;
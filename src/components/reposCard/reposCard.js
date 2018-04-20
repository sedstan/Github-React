import React, { Component } from "react";
import './reposCard.css';

class ReposCard extends Component {
  render() {    
    return (
      <section>
        {this.props.data.current && this.props.data.current.repositories.edges.map((item, index) => {
          console.log(this.props.data.current.repositories.edges)
          return (
            <div className="card card--repos" key={index}>
              <div>
                <a href={item.node.url}><h4>{item.node.name}</h4></a>
                  <p>{item.node.description}</p>
                  <p>Languages:</p>
                  {item.node.languages.edges.map((lang, i) => {
                    return (
                      <div key={i}>
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
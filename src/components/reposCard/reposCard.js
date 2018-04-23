import React from "react";
import './reposCard.css';

const ReposCard = props => {
  return (
    <section>
      {props.data.current && props.data.current.repositories.edges.map((item, index) => {
        console.log(props.data.current.repositories.edges)
        return (
          <div className="card" key={index}>
            <div className="card--repos">
              <a href={item.node.url}><h4>{item.node.name}</h4></a>
              <p>{item.node.description}</p>
              <h3>Languages:</h3>
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

export default ReposCard
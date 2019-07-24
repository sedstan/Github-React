import React from 'react';
import PropTypes from 'prop-types';
import './reposCard.scss';

const ReposCard = ({ data }) => (
  <section className="layout">
    {data.current && data.current.repositories.edges.map(repo => (
      <div className="card" key={repo.node.id}>
        <a href={repo.node.url}>
          <div className="card__repos">
            <h4>{repo.node.name}</h4>
            <p className="card__description">{repo.node.description}</p>
            <h3>Languages:</h3>
            <div className="card__languages">
              {repo.node.languages.edges.map(lang => (
                <div key={lang.node.id}>
                  <p style={{ color: `${lang.node.color}` }}>{lang.node.name}</p>
                </div>
              ))}
            </div>
          </div>
        </a>
      </div>
    ))}
  </section>
);

ReposCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ReposCard;

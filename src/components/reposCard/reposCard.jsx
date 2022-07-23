import React from 'react';
import PropTypes from 'prop-types';
import './reposCard.scss';

const ReposCard = ({ data }) => (
  <section role="contentinfo" aria-label="A card containing information about the Github repository" className="reposCardGrid">
    {data.current && data.current.repositories.edges.map((repo) => (
      <article className="card" key={repo.node.id}>
        <a href={repo.node.url}>
          <main className="card__repos">
            <h4>{repo.node.name}</h4>
            <p className="card__description">{repo.node.description}</p>
            <section className="card__languages">
              <h3>Languages:</h3>
              {repo.node.languages.edges.map(lang => (
                <div key={lang.node.id}>
                  <p style={{ color: `${lang.node.color}` }}>{lang.node.name}</p>
                </div>
              ))}
            </section>
            <section className="card__primaryLanguage">
              <div id={repo.node.primaryLanguage.id}>
                <h3>Primary Language: </h3>
                <p style={{ color: `${repo.node.primaryLanguage.color}` }}>
                  {repo.node.primaryLanguage.name}
                </p>
              </div>
            </section>
          </main>
        </a>
      </article>
    ))}
  </section>
);

ReposCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ReposCard;

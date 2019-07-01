import React from "react";
import './reposCard.scss';

const ReposCard = props => {
	console.log(props);
	return (
		<section className="layout">
			{props.data.current && props.data.current.repositories.edges.map((repo, index) => {
				return (
					<div className="card" key={index}>
						<a href={repo.node.url}>
							<div className="card__repos">
								<h4>{repo.node.name}</h4>
								<p className="card__description">{repo.node.description}</p>
								<h3>Languages:</h3>
								<div className="card__languages">
								{repo.node.languages.edges.map((lang, i) => {
									return (
										<div key={i}>
											<p style={{color: `${lang.node.color}`}}>{lang.node.name}</p>
										</div>
									)
								})}
								</div>
							</div>
						</a>
					</div>
				)
			})}
		</section>
	)
};

export default ReposCard


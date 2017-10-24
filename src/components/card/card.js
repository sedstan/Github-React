import React,{ Component } from "react";
import './card.css';
import InnerCard from "../innerCard/innerCard";

class Card extends Component {

	render() {
		console.log(this.props);
		return (
				<div className="card">
					{this.props.data.current && <InnerCard data={this.props.data.current.name } />}
					<h3>Profile Name</h3>
					<p>Profile Bio</p>
					<p>Profile Location</p>
				</div>
		)
	}
}

export default Card;

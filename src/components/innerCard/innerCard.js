import React, { Component } from "react";
import "./innerCard.css";


class InnerCard extends Component {
	render() {
		return (
			<span className="card--profile-inner">
				{this.props.data}
			</span>
		)
	}
}


export default InnerCard;

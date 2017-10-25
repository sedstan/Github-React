import React, { Component } from "react";
import "./innerCard.css";
// import store from "../../store";


class InnerCard extends Component {

	render() {
		return (
			<span className="card-inner">
				{this.props.data}
			</span>
		)
	}
}


export default InnerCard;

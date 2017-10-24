import React, {Component} from "react";
import {connect} from "react-redux";
import * as dataAction from "../actions/profile";
import Card from "../components/card/card";

class DataContainer extends Component {

	componentDidMount = () => {
		this.props.dispatch(dataAction.getProfile());
	}

	render(){
		// console.log(this.props.profile.current)
		return (
			<section>
				<div>
					<h1>Profile Data</h1>
					<Card data={this.props.profile}/>
				</div>
				<div>
					<h1>Repo Data</h1>
				</div>
			</section>
		)
	}
}

function mapStateToProps(state) {
return {profile : state.profile};
}

export default connect(mapStateToProps)(DataContainer);

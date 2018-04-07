import React, {Component} from "react";
import {connect} from "react-redux";
import * as dataAction from "../actions/profile";
import ProfileCard from "../components/profileCard/profileCard";

class DataContainer extends Component {

	componentDidMount = () => {
		this.props.dispatch(dataAction.getProfile());
	}

	render() {
    console.log(this.props);
    
		return (
				<ProfileCard data={this.props.profile}/>
		)
	}
}

function mapStateToProps(state) {
	return {profile: state.profile};
}

export default connect(mapStateToProps)(DataContainer);

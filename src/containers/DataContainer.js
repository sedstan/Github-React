import React, {Component} from "react";
import {connect} from "react-redux";
import {getProfile} from "../actions/site";
import {getRepos} from "../actions/site";
import ProfileCard from "../components/profileCard/profileCard";
 import ReposCard from "../components/reposCard/reposCard";

class DataContainer extends Component {

	componentDidMount = () => {
		this.props.dispatch(getProfile());
		this.props.dispatch(getRepos());
	}

	render() {    
		return (
      <div>
				<ProfileCard data={this.props.profile}/>
				<ReposCard data={this.props.repos}/>
      </div>  
		)
	}
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    repos: state.repos
  };
}

export default connect(mapStateToProps)(DataContainer);

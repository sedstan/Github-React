import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfile, getRepos } from '../actions/site';

import ProfileCard from '../components/profileCard/profileCard';
import ReposCard from '../components/reposCard/reposCard';
import Footer from '../components/footer/footer';

class DataContainer extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getProfile());
    dispatch(getRepos());
  };

  render() {
    const { repos, profile } = this.props;
    return (
      <div>
        <main aria-label="The user's profile, repositories of the site.">
          <ProfileCard data={profile} />
          <ReposCard data={repos} />
        </main>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    repos: state.repos,
  };
}

DataContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  repos: PropTypes.objectOf(PropTypes.object).isRequired,
  profile: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(DataContainer);

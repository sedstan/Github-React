import axios from "axios";
import token from "../config/config.js";

export function getProfile() {
  return function (dispatch) {
    axios({
        method: 'post',
        url: 'https://api.github.com/graphql',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        data: {
          query: `
					query LogIn  { 
						 viewer {
               avatarUrl
              name
              login
              bio
              location
              company
              email
  					}
					}
			`
        }
      })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: "FETCH_USER_PROFILE_FULLFILLED",
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: "FETCH_USER_PROFILE_FAILED",
          payload: error
        });
      });
  }
}

export function getRepos() {
  return function (dispatch) {
    axios({
        method: 'post',
        url: 'https://api.github.com/graphql',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        data: {
          query: `
					query Repos  { 
						 viewer {
								repositories(last: 10) {
								edges {
									node {
										name
										description
                    url
                    languages(last: 10) {
                      edges {
                        node {
                          name
                        }
                      }
                    }
									}
								}
							}
  					}
					}
			`
        }
      })
      .then(response => {
        // console.log(response.data);
        dispatch({
          type: "FETCH_USER_REPOS_FULLFILLED",
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: "FETCH_USER_REPOS_FAILED",
          payload: error
        });
      });
  }
}
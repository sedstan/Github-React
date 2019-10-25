import axios from 'axios';

require('dotenv').config();

export function getProfile() {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://api.github.com/graphql',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
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
        `,
      },
    })
      .then((response) => {
        dispatch({
          type: 'FETCH_USER_PROFILE_FULLFILLED',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_USER_PROFILE_FAILED',
          payload: error,
        });
      });
  };
}

export function getRepos() {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://api.github.com/graphql',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
      data: {
        query: ` 
          query Repos  { 
            viewer {
              repositories(last: 10) {
                edges {
                  node {
                    id
                    name
                    description
                    url
                    languages(last: 10) {
                      edges {
                        node {
                          id
                          name
                          color
                        }
                      }
                    }
                    primaryLanguage {
                      id
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        `,
      },
    })
      .then((response) => {
        // console.log(response.data);
        dispatch({
          type: 'FETCH_USER_REPOS_FULLFILLED',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_USER_REPOS_FAILED',
          payload: error,
        });
      });
  };
}

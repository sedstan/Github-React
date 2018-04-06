import axios from "axios";

export function getProfile() {
	return function(dispatch) {
		axios({
			url: 'https://api.github.com/graphql/',
			method: 'post',
			data: {
				query: `
					query LogIn  { 
						 viewer {
							login
							isViewer
							avatarUrl
							name
							login
							bio
							company
							email
							repositories(first: 20) {
								edges {
									node {
										name
										description
										url
									}
								}
							}
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

// export function getRepos() {
// 	return function(dispatch) {
// 		axios.get(
// 			"https://api.github.com/users/sedstan/repos?type,page,per_page,sort"
// 		)
// 		.then(response => {
// 			console.log(response.data);
// 			dispatch({
// 				type: "FETCH_USER_REPOS_FULFILLED",
// 				payload: response.data
// 			});
// 		})
// 		.catch( error => {
// 			console.log(error);
// 			dispatch({
// 				type: "FETCH_USER_REPOS_FAILED",
// 				payload: error
// 			});
// 		});
// 	}
// }

import axios from "axios";

export function getProfile() {
	return function(dispatch) {
		axios.get(
			"https://api.github.com/graphql"
		)
		.then(response => {
			// console.log(response.data);
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

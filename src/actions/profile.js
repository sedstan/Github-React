import axios from "axios";

export function getProfile() {
	return function(dispatch) {
		axios.get(
			"https://api.github.com/users/sedstan"
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

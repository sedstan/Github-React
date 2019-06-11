export default function reducer(
	state = {
		current: null,
		error: null
	},
	action
) {
	switch (action.type) {
		case "FETCH_USER_REPOS_FULLFILLED":
			return {
				...state,
				current: {
					repositories: action.payload.data.viewer.repositories
				}
			}
		case "FETCH_USER_REPOS_FAILED":
			return {
				...state,
				error: action.payload
			}
		default: {
			return state;
		}
	}
}

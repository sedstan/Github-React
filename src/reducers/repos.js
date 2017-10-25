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
					name: action.payload.name,
					language: action.payload.language,
					html_url: action.payload.html_url,
					description: action.payload.description,
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

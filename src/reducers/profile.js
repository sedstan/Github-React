export default function reducer(
	state = {
		current: null,
		error: null
	},
	action
) {
	switch (action.type) {
		case "FETCH_USER_PROFILE_FULLFILLED":
			return {
				...state,
				current: {
					picture: action.payload.avatar_url,
					name: action.payload.name,
					bio: action.payload.bio,
					location: action.payload.location
				}
			}
		case "FETCH_USER_PROFILE_FAILED":
			return {
				...state,
				error: action.payload
			}
		default: {
			return state;
		}

	}
}

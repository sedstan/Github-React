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
					name: action.payload.data.viewer.name,
					bio: action.payload.data.viewer.bio,
          location: action.payload.data.viewer.location,
          company: action.payload.data.viewer.company,
          email: action.payload.data.viewer.email
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

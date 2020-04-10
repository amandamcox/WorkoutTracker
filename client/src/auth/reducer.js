const authReducer = (
	state = {
		isFetching: false,
		isLoggedIn: false,
		error: false,
		errorMessage: null,
	},
	action
) => {
	switch (action.type) {
		case 'REQUEST_LOGIN':
			return Object.assign({}, state, {
				isFetching: true,
				isLoggedIn: false,
			})
		case 'RECEIVE_LOGIN':
			return Object.assign({}, state, {
				isFetching: false,
				isLoggedIn: true,
				authObject: action.payload,
				lastUpdated: action.loginAt,
				error: false,
				errorMessage: null,
			})
		case 'LOG_OUT':
			return Object.assign({}, state, {
				isFetching: false,
				isLoggedIn: false,
				authObject: null,
			})
		case 'AUTH_ERROR':
			return Object.assign({}, state, {
				isFetching: false,
				isLoggedIn: false,
				error: true,
				errorMessage: action.error.message,
			})
		default:
			return state
	}
}

export default authReducer

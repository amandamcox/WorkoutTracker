const trackerReducer = (
	state = {
		isFetching: false,
		error: false,
		errorMessage: null,
		userWorkouts: [],
		exercises: [],
		isEditingTracker: false,
		isAddingTracker: false,
	},
	action
) => {
	switch (action.type) {
		case 'REQUEST_SERVER':
			return Object.assign({}, state, {
				isFetching: true,
			})
		case 'RECEIVE_WORKOUTS':
			return Object.assign({}, state, {
				isFetching: false,
				error: false,
				errorMessage: null,
				userWorkouts: action.payload,
				lastUpdated: action.receivedAt,
			})
		case 'RECEIVE_EXERCISE_LIST':
			return Object.assign({}, state, {
				isFetching: false,
				error: false,
				errorMessage: null,
				exercises: action.payload,
			})
		case 'ADD_NEW_EXERCISE':
			return Object.assign({}, state, {
				exercises: [...state.exercises, action.payload],
			})
		case 'ADD_NEW_WORKOUT':
			return Object.assign({}, state, {
				isFetching: false,
				error: false,
				errorMessage: null,
				userWorkouts: [...state.userWorkouts, action.payload],
				lastUpdated: action.receivedAt,
			})
		case 'UPDATE_EDITED_WORKOUT':
			return Object.assign({}, state, {
				isFetching: false,
				error: false,
				errorMessage: null,
				userWorkouts: state.userWorkouts
					.filter((workout) => workout._id !== action.payload._id)
					.concat(action.payload),
				lastUpdated: action.receivedAt,
			})
		case 'DELETE_WORKOUT':
			return Object.assign({}, state, {
				isFetching: false,
				error: false,
				errorMessage: null,
				userWorkouts: state.userWorkouts.filter(
					(workout) => workout._id !== action.payload
				),
				lastUpdated: action.receivedAt,
			})
		case 'SERVER_ERROR':
			return Object.assign({}, state, {
				isFetching: false,
				error: true,
				errorMessage: action.error.message,
			})
		case 'SET_TRACKER_EDITING_STATUS':
			return Object.assign({}, state, {
				isEditingTracker: action.status,
				editingWorkout: action.workout,
			})
		case 'SET_TRACKER_ADDING_STATUS':
			return Object.assign({}, state, {
				isAddingTracker: action.status,
			})
		default:
			return state
	}
}

export default trackerReducer

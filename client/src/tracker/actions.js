import trackerService from './service'

const requestServer = () => {
	return {
		type: 'REQUEST_SERVER',
	}
}

const receiveWorkoutServerRes = (savedWorkouts) => {
	return {
		type: 'RECEIVE_WORKOUTS',
		payload: savedWorkouts.workouts,
		receivedAt: Date.now(),
	}
}

const addNewWorkout = (newWorkoutObj) => {
	return {
		type: 'ADD_NEW_WORKOUT',
		payload: newWorkoutObj,
		receivedAt: Date.now(),
	}
}

const updateEditedWorkout = (newWorkoutObj) => {
	return {
		type: 'UPDATE_EDITED_WORKOUT',
		payload: newWorkoutObj,
		receivedAt: Date.now(),
	}
}

const deleteWorkout = (workoutId) => {
	return {
		type: 'DELETE_WORKOUT',
		payload: workoutId,
		receivedAt: Date.now(),
	}
}

const receiveExercises = (exercises) => {
	return {
		type: 'RECEIVE_EXERCISE_LIST',
		payload: exercises,
	}
}

const addExercise = (newExercise) => {
	return {
		type: 'ADD_NEW_EXERCISE',
		payload: newExercise,
	}
}

export const tryGetUserWorkouts = (userToken) => {
	return async (dispatch) => {
		dispatch(requestServer())
		try {
			const res = await trackerService.getUserWorkouts(userToken)
			return dispatch(receiveWorkoutServerRes(res))
		} catch (error) {
			dispatch(receiveError(error))
		}
	}
}

export const tryGetExercises = () => {
	return async (dispatch) => {
		dispatch(requestServer())
		try {
			const res = await trackerService.getExercises()
			return dispatch(receiveExercises(res))
		} catch (error) {
			dispatch(receiveError(error))
		}
	}
}

export const trySaveUserWorkout = (userToken, workoutObj) => {
	return async (dispatch) => {
		dispatch(requestServer())
		try {
			const res = await trackerService.saveUserWorkout(userToken, workoutObj)
			return dispatch(addNewWorkout(res))
		} catch (error) {
			dispatch(receiveError(error))
		}
	}
}

export const tryEditUserWorkout = (userWorkoutId, editObj) => {
	return async (dispatch) => {
		dispatch(requestServer())
		try {
			const res = await trackerService.updateUserWorkout(userWorkoutId, editObj)
			return dispatch(updateEditedWorkout(res))
		} catch (error) {
			dispatch(receiveError(error))
		}
	}
}

export const tryDeleteUserWorkout = (userWorkoutId) => {
	return async (dispatch) => {
		dispatch(requestServer())
		try {
			await trackerService.deleteUserWorkout(userWorkoutId)
			return dispatch(deleteWorkout(userWorkoutId))
		} catch (error) {
			dispatch(receiveError(error))
		}
	}
}

export const tryAddNewExercise = (exercise) => {
	return async (dispatch) => {
		dispatch(requestServer())
		try {
			const res = await trackerService.addExercise(exercise)
			return dispatch(addExercise(res))
		} catch (error) {
			dispatch(receiveError(error))
		}
	}
}

const receiveError = (error) => {
	return {
		type: 'SERVER_ERROR',
		error,
	}
}

export const setEditing = (status, workout) => {
	return {
		type: 'SET_TRACKER_EDITING_STATUS',
		status,
		workout,
	}
}

export const setAdding = (status) => {
	return {
		type: 'SET_TRACKER_ADDING_STATUS',
		status,
	}
}

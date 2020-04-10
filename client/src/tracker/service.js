import axios from 'axios'

const getUserWorkouts = async token => {
	try {
		const headers = {
			headers: { Authorization: `bearer ${token}` },
		}
		const res = await axios.get('/api/userWorkouts', headers)
		return res.data
	} catch (error) {
		throw Error(error)
	}
}

const saveUserWorkout = async (token, userWorkoutObj) => {
	try {
		const headers = {
			headers: { Authorization: `bearer ${token}` },
		}
		const res = await axios.post('/api/userWorkouts', userWorkoutObj, headers)
		return res.data
	} catch (error) {
		throw Error(error)
	}
}

const updateUserWorkout = async (id, userWorkoutObj) => {
	try {
		const res = await axios.patch(`/api/userWorkouts/${id}`, userWorkoutObj)
		return res.data
	} catch (error) {
		throw Error(error)
	}
}

const deleteUserWorkout = async id => {
	try {
		const res = await axios.delete(`/api/userWorkouts/${id}`)
		return res.data
	} catch (error) {
		throw Error(error)
	}
}

const getExercises = async () => {
	try {
		const res = await axios.get('/api/exercises')
		return res.data
	} catch (error) {
		throw Error(error)
	}
}

export default {
	getUserWorkouts,
	saveUserWorkout,
	updateUserWorkout,
	deleteUserWorkout,
	getExercises,
}

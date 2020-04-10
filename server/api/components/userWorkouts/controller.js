const jwt = require('jsonwebtoken')
const {
	getUserWorkoutsService,
	createNewWorkoutService,
	deleteWorkoutService,
	updateWorkoutService,
} = require('./service')

// Helper for validating tokens from requests
const validateToken = req => {
	const auth = req.get('authorization')
	if (auth && auth.toLowerCase().startsWith('bearer ')) {
		const token = auth.substring(7)
		try {
			return jwt.verify(token, process.env.SECRET)
		} catch (error) {
			return null
		}
	}
	return null
}

const getUserWorkouts = async (req, res, next) => {
	const decodedToken = validateToken(req)
	if (!decodedToken) {
		return res.status(401).json({ error: 'Invalid or Missing Token' })
	}
	try {
		const workouts = await getUserWorkoutsService(decodedToken.id)
		res.json(workouts)
	} catch (error) {
		next(error)
	}
}

const createUserWorkout = async (req, res, next) => {
	const decodedToken = validateToken(req)
	if (!decodedToken) {
		return res.status(401).json({ error: 'Invalid or Missing Token' })
	}
	try {
		const savedWorkout = await createNewWorkoutService(req.body, decodedToken.id)
		res.json(savedWorkout)
	} catch (error) {
		next(error)
	}
}

const deleteUserWorkout = async (req, res, next) => {
	try {
		const deletedWorkout = await deleteWorkoutService(req.params.id)
		deletedWorkout ? res.status(204).end() : res.status(404).end()
	} catch (error) {
		next(error)
	}
}

const updateUserWorkout = async (req, res, next) => {
	try {
		const updatedWorkout = await updateWorkoutService(req.params.id, req.body)
		updatedWorkout ? res.json(updatedWorkout) : res.status(404).end()
	} catch (error) {
		next(error)
	}
}

module.exports = { getUserWorkouts, createUserWorkout, deleteUserWorkout, updateUserWorkout }

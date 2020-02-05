const workoutsRouter = require('express').Router()
const Workout = require('../models/workout')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getToken = req => {
	const auth = req.get('authorization')
	if (auth && auth.toLowerCase().startsWith('bearer ')) {
		return auth.substring(7)
	}
	return null
}

workoutsRouter.get('/', async (req, res, next) => {
	const token = getToken(req)
	try {
		const decodedToken = jwt.verify(token, process.env.SECRET)
		if (!token || !decodedToken.id) {
			return res.status(401).json({ error: 'Token Missing or Invalid' })
		}
		const workouts = await Workout.find({ userId: decodedToken.id }).populate('userId', {
			username: 1,
			name: 1,
		})
		res.json(workouts.map(workout => workout.toJSON()))
	} catch (error) {
		next(error)
	}
})

workoutsRouter.get('/:id', async (req, res, next) => {
	try {
		const workout = await Workout.findById(req.params.id)
		workout ? res.json(workout.toJSON()) : res.status(404).end()
	} catch (error) {
		next(error)
	}
})

workoutsRouter.post('/', async (req, res, next) => {
	const token = getToken(req)
	try {
		const decodedToken = jwt.verify(token, process.env.SECRET)
		if (!token || !decodedToken.id) {
			return res.status(401).json({ error: 'Token Missing or Invalid' })
		}

		const user = await User.findById(decodedToken.id)
		const workout = new Workout({
			exercise: req.body.exercise,
			date: req.body.date,
			trackedMetric: req.body.trackedMetric,
			metricType: req.body.metricType,
			userId: user._id,
		})
		const savedWorkout = await workout.save()
		user.workouts = user.workouts.concat(savedWorkout._id)
		await user.save()
		res.json(savedWorkout.toJSON())
	} catch (error) {
		next(error)
	}
})

workoutsRouter.delete('/:id', async (req, res, next) => {
	try {
		const workout = await Workout.findByIdAndDelete(req.params.id)
		workout ? res.status(204).end() : res.status(404).end()
	} catch (error) {
		next(error)
	}
})

workoutsRouter.patch('/:id', async (req, res, next) => {
	try {
		const newChange = req.body
		const savedWorkout = await Workout.findByIdAndUpdate(req.params.id, newChange, {
			new: true,
		})
		res.json(savedWorkout.toJSON())
	} catch (error) {
		next(error)
	}
})

module.exports = workoutsRouter

const workoutsRouter = require('express').Router()
const Workout = require('../models/workout')

workoutsRouter.get('/', async (req, res) => {
	const workouts = await Workout.find({})
	res.json(workouts.map(workout => workout.toJSON()))
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
	try {
		const workout = new Workout({
			exercise: req.body.exercise,
			date: req.body.date,
			trackedMetric: req.body.trackedMetric,
		})
		const savedWorkout = await workout.save()
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

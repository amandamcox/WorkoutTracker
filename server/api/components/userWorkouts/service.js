const UserWorkout = require('./model')
const User = require('../user/model')

const getUserWorkoutsService = async (userId) => {
	try {
		return await User.findById(userId).populate('workouts', '-userId -__v')
	} catch (error) {
		throw error
	}
}

const createNewWorkoutService = async (req, userId) => {
	try {
		const user = await User.findById(userId)
		const workoutObj = new UserWorkout({
			exercise: req.exercise,
			date: req.date,
			trackedMetric: req.trackedMetric,
			metricType: req.metricType,
			userId: user._id,
		})
		const savedWorkout = await workoutObj.save()
		user.workouts = user.workouts.concat(savedWorkout._id)
		await user.save()
		return savedWorkout
	} catch (error) {
		throw error
	}
}

const deleteWorkoutService = async (id) => {
	try {
		return await UserWorkout.findByIdAndDelete(id)
	} catch (error) {
		throw error
	}
}

const updateWorkoutService = async (id, changes) => {
	try {
		return await UserWorkout.findByIdAndUpdate(id, changes, {
			new: true,
			select: '-userId -__v',
		})
	} catch (error) {
		throw error
	}
}

module.exports = {
	getUserWorkoutsService,
	createNewWorkoutService,
	deleteWorkoutService,
	updateWorkoutService,
}

const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
	exercise: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	trackedMetric: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Workout', workoutSchema)

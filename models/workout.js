const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
	exercise: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	trackedMetric: {
		type: String,
		required: true,
	},
	metricType: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
})

module.exports = mongoose.model('Workout', workoutSchema)

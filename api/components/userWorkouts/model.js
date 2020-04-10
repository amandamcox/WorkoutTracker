const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userWorkoutSchema = new Schema({
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
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
})

module.exports = mongoose.model('Workout', userWorkoutSchema)

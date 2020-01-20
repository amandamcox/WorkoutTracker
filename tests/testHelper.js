const Workout = require('../models/workout')

const initialDBData = [
	{
		exercise: 'Jogging',
		date: '2020-01-10T08:00:00.000Z',
		trackedMetric: 20,
	},
	{
		exercise: 'Spin',
		date: new Date().toISOString(),
		trackedMetric: 45,
	},
]

const nonExistingId = async () => {
	const placeholderObject = new Workout({
		exercise: 'test',
		date: new Date().toISOString(),
		trackedMetric: 1,
	})
	await placeholderObject.save()
	await placeholderObject.remove()

	return placeholderObject._id.toString()
}

const getDataInDB = async () => {
	const allDBData = await Workout.find({})
	return allDBData.map(w => w.toJSON())
}

module.exports = {
	initialDBData,
	nonExistingId,
	getDataInDB,
}

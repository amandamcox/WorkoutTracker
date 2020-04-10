const { getAllService, createNewExerciseService, bulkNewExerciseService } = require('./service')

const getAll = async (req, res, next) => {
	try {
		const exercises = await getAllService()
		res.json(exercises)
	} catch (error) {
		next(error)
	}
}

const createNewExercise = async (req, res, next) => {
	try {
		const newExercise = await createNewExerciseService(req.body)
		res.json(newExercise)
	} catch (error) {
		next(error)
	}
}

const bulkNewExercise = async (req, res, next) => {
	try {
		const newBulkExercises = await bulkNewExerciseService(req.body.exerciseArr)
		res.json(newBulkExercises)
	} catch (error) {
		next(error)
	}
}

module.exports = { getAll, createNewExercise, bulkNewExercise }

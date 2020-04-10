const Exercise = require('./model')

const getAllService = async () => {
	try {
		return await Exercise.find({})
	} catch (error) {
		throw error
	}
}

const createNewExerciseService = async req => {
	try {
		return await Exercise.create(req)
	} catch (error) {
		throw error
	}
}

const bulkNewExerciseService = async exArr => {
	try {
		return await Exercise.insertMany(exArr, { ordered: false })
	} catch (error) {
		throw error
	}
}

module.exports = { getAllService, createNewExerciseService, bulkNewExerciseService }

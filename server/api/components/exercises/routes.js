const exercisesRouter = require('express').Router()
const { getAll, createNewExercise, bulkNewExercise } = require('./controller')

exercisesRouter.get('/', getAll)
exercisesRouter.post('/', createNewExercise)
exercisesRouter.post('/bulk', bulkNewExercise)

module.exports = exercisesRouter

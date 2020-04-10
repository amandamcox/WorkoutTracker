const userWorkoutsRouter = require('express').Router()
const {
	getUserWorkouts,
	createUserWorkout,
	deleteUserWorkout,
	updateUserWorkout,
} = require('./controller')

userWorkoutsRouter.get('/', getUserWorkouts)
userWorkoutsRouter.post('/', createUserWorkout)
userWorkoutsRouter.delete('/:id', deleteUserWorkout)
userWorkoutsRouter.patch('/:id', updateUserWorkout)

module.exports = userWorkoutsRouter

const routes = require('express').Router()
const userRouter = require('./components/user/routes')
const userWorkoutsRouter = require('./components/userWorkouts/routes')
const exercisesRouter = require('./components/exercises/routes')

routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected' })
})
routes.use('/users', userRouter)
routes.use('/userWorkouts', userWorkoutsRouter)
routes.use('/exercises', exercisesRouter)

module.exports = routes

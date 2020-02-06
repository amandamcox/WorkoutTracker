const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res, next) => {
	try {
		const users = await User.find({}).populate('workouts', {
			exercise: 1,
			date: 1,
			trackedMetric: 1,
			metricType: 1,
		})
		res.json(users.map(u => u.toJSON()))
	} catch (error) {
		next(error)
	}
})

usersRouter.post('/', async (req, res, next) => {
	try {
		const saltRounds = 10
		const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
		const user = new User({
			username: req.body.username,
			name: req.body.name,
			passwordHash,
		})
		const savedUser = await user.save()
		const userForToken = {
			username: savedUser.username,
			id: savedUser._id,
		}
		const token = jwt.sign(userForToken, process.env.SECRET)
		res.status(200).send({ token, username: savedUser.username, name: savedUser.name })
	} catch (error) {
		next(error)
	}
})

// usersRouter.delete('/:id', async (req, res, next) => {
// 	try {
// 		const user = await user.findByIdAndDelete(req.params.id)
// 		User ? res.status(204).end() : res.status(404).end()
// 	} catch (error) {
// 		next(error)
// 	}
// })

// usersRouter.patch('/:id', async (req, res, next) => {
// 	try {
// 		const newChange = req.body
// 		const savedUser = await User.findByIdAndUpdate(req.params.id, newChange, {
// 			new: true,
// 		})
// 		res.json(savedUser.toJSON())
// 	} catch (error) {
// 		next(error)
// 	}
// })

module.exports = usersRouter

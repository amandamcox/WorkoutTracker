const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const compression = require('compression')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const logger = require('./utils/logger')
const workoutsRouter = require('./controllers/workouts')
const app = express()

mongoose
	.connect(config.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		server: {
			socketOptions: {
				keepAlive: 300000,
				connectTimeoutMS: 30000,
			},
		},
		replset: {
			socketOptions: {
				keepAlive: 300000,
				connectTimeoutMS: 30000,
			},
		},
	})
	.then(() => logger.info('Connected to MongoDB'))
	.catch(error => logger.error('Error connecting to MongoDB:', error.message))

app.use(bodyParser.json())
app.use(cors())
app.use(compression())
app.use(express.static('build'))
app.use(middleware.requestLogger)
app.use('/api/workouts', workoutsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

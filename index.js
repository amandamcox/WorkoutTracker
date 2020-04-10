const app = require('./server')
const http = require('http')
const mongoose = require('mongoose')
const { PORT, MONGODB_URI } = require('./config/config')
const logger = require('./api/middleware/logger')

const server = http.createServer(app)
server.listen(PORT, () => logger.info(`Server running on port ${PORT}`))

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => logger.info('Connected to MongoDB'))
	.catch((error) => logger.error('Error connecting to MongoDB:', error.message))

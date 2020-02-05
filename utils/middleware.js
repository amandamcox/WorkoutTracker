const logger = require('./logger')

const requestLogger = (req, res, next) => {
	logger.info('Method:', req.method)
	logger.info('Status:', res.statusCode)
	logger.info('Path:', req.path)
	logger.info('Params:', req.params)
	logger.info('Body:', req.body)
	logger.info('Referrer:', req.headers.host)
	logger.info('---')
	next()
}

const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: 'Unknown Endpoint' })
}

const errorHandler = (error, req, res, next) => {
	logger.error('ERROR:', error.message)
	if (error.name === 'CastError' && error.kind === 'ObjectId') {
		return res.status(400).send({ error: 'Malformatted id' })
	} else if (error.name === 'ValidationError') {
		return res.status(400).json({ error: error.message })
	} else if (error.name === 'JsonWebTokenError') {
		return res.status(401).json({ error: 'Invalid Token' })
	}
	next(error)
}

module.exports = {
	requestLogger,
	unknownEndpoint,
	errorHandler,
}

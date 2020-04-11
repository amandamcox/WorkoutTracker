const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const requestLogger = require('./api/middleware/requestLogger')
const handleError = require('./api/middleware/errorHandler')
const routes = require('./api/routes')
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(compression())
app.use(express.static('client/build'))
app.use(requestLogger)
app.use('/api', routes)
app.use(handleError)

module.exports = app

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const requestLogger = require('./middleware/requestLogger')
const handleError = require('./middleware/errorHandler')
const routes = require('./routes')
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(compression())
app.use(express.static('../client/build'))
app.use(requestLogger)
app.use('/api', routes)
app.use(handleError)

module.exports = app

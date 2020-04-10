const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const exerciseSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
})

exerciseSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject.__v
		delete returnedObject._id
	},
})

exerciseSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Exercise', exerciseSchema)

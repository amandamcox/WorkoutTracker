const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: false,
	},
	passwordHash: {
		type: String,
		required: true,
	},
	workouts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Workout',
		},
	],
})

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject.passwordHash
		delete returnedObject.__v
		delete returnedObject._id
	},
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)

// File populates a JSON file with a list of exercises for frontend
const fs = require('fs')

const allExercises = []
const repExercisesArr = [
	'Squat',
	'Lunge',
	'Push up',
	'Pull up',
	'Crunch',
	'Sit up',
	'Leg raise',
	'Russian twist',
	'Back extension',
	'Box jumps',
	'Glute bridge',
	'V-up',
	'Reverse crunch',
	'Flutter kicks',
	'Bicycle crunch',
	'Heel taps',
	'Plank jacks',
	'Mountain climbers',
	'Superman',
	'Bird dog',
	'Oblique crunch',
	'Side lunges',
	'Side skaters',
	'Sumo squats',
	'Donkey kicks',
	'Burpees',
]
const distanceExercisesArr = ['Running', 'Cycling', 'Sprinting', 'Walking', 'Stairs', 'Swimming']
const timeExercisesArr = [
	'Wall sit',
	'Elbow plank',
	'Side plank',
	'Extended plank',
	'Yoga',
	'Pilates',
	'Hundreds',
	'Dancing',
	'Rowing',
	'Elliptical',
	'Spin',
]
const weightExercisesArr = [
	'Leg press',
	'Deadlift',
	'Leg extension',
	'Leg curl',
	'Calf raise',
	'Bench press',
	'Chest fly',
	'Tricep pull down',
	'Bent-over row',
	'Upright row',
	'Shoulder press',
	'Shoulder fly',
	'Lateral raise',
	'Shoulder shrug',
	'Tricep extension',
	'Bicep curl',
	'Kettlebell swing',
	'Hip thrust',
	'Wood chop',
]

const sortByExercise = data => {
	return data.sort(function(a, b) {
		if (a.exercise < b.exercise) {
			return -1
		}
		if (a.exercise > b.exercise) {
			return 1
		}
		return 0
	})
}

const buildModel = (dataset, trackingType) => {
	dataset.forEach(exercise => {
		let model = {
			exercise,
			trackingType,
		}
		allExercises.push(model)
	})
}

const writeToFile = () => {
	sortByExercise(allExercises)
	const json = JSON.stringify(allExercises, null, 4)
	fs.writeFile('exerciseDataSet.json', json, 'utf8', () => {
		console.log('Saved data set to project folder')
	})
}

buildModel(repExercisesArr, 'reps')
buildModel(distanceExercisesArr, 'distance')
buildModel(timeExercisesArr, 'time')
buildModel(weightExercisesArr, 'weight')

writeToFile()

const mongoose = require('mongoose')
const supertest = require('supertest')
const testHelper = require('./testHelper')
const app = require('../app')
const Workout = require('../models/workout')

const api = supertest(app)

beforeEach(async () => {
	await Workout.deleteMany({})
	for (let workout of testHelper.initialDBData) {
		let workoutObject = new Workout(workout)
		await workoutObject.save()
	}
})

describe('Loading data', () => {
	test('Initial workout data is returned', async () => {
		const res = await api.get('/api/workouts')
		expect(res.body.length).toBe(testHelper.initialDBData.length)
	})

	test('Database data is returned as JSON', async () => {
		await api
			.get('/api/workouts')
			.expect(200)
			.expect('Content-Type', /application\/json/)
	})

	test('Can return data by id', async () => {
		const data = await testHelper.getDataInDB()
		const workout = data[1]
		const res = await api.get(`/api/workouts/${workout._id}`)
		expect(res.body.exercise).toBe(workout.exercise)
		expect(res.body.trackedMetric).toBe(workout.trackedMetric)
		expect(res.body.metricType).toBe(workout.metricType)
	})

	test('Getting invalid id throws error', async () => {
		const invalidId = await testHelper.nonExistingId()
		await api.get(`/api/workouts/${invalidId}`).expect(404)
	})
})

describe('Saving new data', () => {
	test('Saving a valid workout works', async () => {
		const testWorkout = {
			exercise: 'Elliptical',
			date: '2020-01-10T08:00:00.000Z',
			trackedMetric: 35,
			metricType: 'minutes',
		}
		await api
			.post('/api/workouts')
			.send(testWorkout)
			.expect(200)
			.expect('Content-Type', /application\/json/)

		const res = await testHelper.getDataInDB()
		const returnedExercises = res.map(w => w.exercise)
		expect(res.length).toBe(testHelper.initialDBData.length + 1)
		expect(returnedExercises).toContain('Elliptical')
	})

	test('Saving an invalid workout throws error', async () => {
		const testWorkout = {
			exercise: 'Testing',
			date: '2020-01-10T08:00:00.000Z',
		}

		await api
			.post('/api/workouts')
			.send(testWorkout)
			.expect(400)

		const res = await testHelper.getDataInDB()
		expect(res.length).toBe(testHelper.initialDBData.length)
	})
})

describe('Editing and Deleting data', () => {
	test('Deleting a workout works', async () => {
		const testWorkout = new Workout({
			exercise: 'Gardening',
			date: new Date().toISOString(),
			trackedMetric: 15,
			metricType: 'minutes',
		})

		const newData = await testWorkout.save()
		const newDataId = newData._id.toString()
		await api.delete(`/api/workouts/${newDataId}`).expect(204)
		const res = await testHelper.getDataInDB()
		expect(res.length).toBe(testHelper.initialDBData.length)
	})

	test('Deleting an invalid workout throws an error', async () => {
		const invalidId = await testHelper.nonExistingId()
		await api.delete(`/api/workout/${invalidId}`).expect(404)
		const res = await testHelper.getDataInDB()
		expect(res.length).toBe(testHelper.initialDBData.length)
	})

	test('Editing a workout works', async () => {
		const testWorkout = {
			exercise: 'Banana Peeling',
		}

		const data = await testHelper.getDataInDB()
		const firstWorkout = data[0]
		await api
			.patch(`/api/workouts/${firstWorkout._id}`)
			.send(testWorkout)
			.expect(200)
		const newData = await testHelper.getDataInDB()
		expect(newData[0].exercise).toBe(testWorkout.exercise)
		expect(newData[0].date).toStrictEqual(firstWorkout.date)
		expect(newData[0].trackedMetric).toBe(firstWorkout.trackedMetric)
		expect(newData[0].metricType).toBe(firstWorkout.metricType)
	})
})

afterAll(() => {
	mongoose.connection.close()
})

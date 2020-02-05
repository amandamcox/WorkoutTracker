import React, { useState, useEffect } from 'react'
import NewWorkout from './NewWorkout'
import WorkoutTable from './WorkoutTable'
import workoutService from '../services/workouts'

const Workouts = ({ loggedIn }) => {
	const [savedWorkouts, setSavedWorkouts] = useState([])

	const sortDataByDate = data => {
		return data.sort(function(a, b) {
			if (Date.parse(a.date) > Date.parse(b.date)) {
				return -1
			}
			if (Date.parse(a.date) < Date.parse(b.date)) {
				return 1
			}
			return 0
		})
	}

	useEffect(() => {
		if (loggedIn) {
			const getInitialLoad = async () => {
				const req = await workoutService.getAll()
				req.filter(workout => console.log(workout.userId.username))
				// const filteredWorkouts = req.filter(
				// 	workout => loggedIn.username === workout.username
				// )
				const sortedData = sortDataByDate(req)
				setSavedWorkouts(sortedData)
			}
			getInitialLoad()
		}
	}, [loggedIn])

	const handleNewRecordSave = async newRecord => {
		const newSavedWorkout = await workoutService.saveRecord(newRecord)
		const newSortedWorkouts = sortDataByDate(savedWorkouts.concat(newSavedWorkout))
		setSavedWorkouts(newSortedWorkouts)
	}

	const handleRecordDelete = async id => {
		await workoutService.deleteRecord(id)
		const newSortedWorkouts = sortDataByDate(
			savedWorkouts.filter(workout => workout._id !== id)
		)
		setSavedWorkouts(newSortedWorkouts)
	}

	const handleRecordEdit = async (id, editObject) => {
		const newEditedWorkout = await workoutService.updateRecord(id, editObject)
		const newSortedWorkouts = sortDataByDate(
			savedWorkouts.map(workout =>
				workout._id !== newEditedWorkout._id ? workout : newEditedWorkout
			)
		)
		setSavedWorkouts(newSortedWorkouts)
	}

	return (
		<div>
			{loggedIn ? (
				<div>
					<div className='ui container container-padding'>
						<h1>Add A Workout</h1>
						<NewWorkout onSave={handleNewRecordSave} />
					</div>
					<div className='gray-container'>
						<div className='ui container'>
							{savedWorkouts.length > 0 ? (
								<React.Fragment>
									<h1>Your Workout History</h1>
									<WorkoutTable
										workoutData={savedWorkouts}
										onSave={handleNewRecordSave}
										onDelete={handleRecordDelete}
										onEdit={handleRecordEdit}
									></WorkoutTable>
								</React.Fragment>
							) : (
								<h1>No Saved Workouts</h1>
							)}
						</div>
					</div>
				</div>
			) : (
				<div className='ui container container-padding'>
					<h1>Want to start tracking each exercise?</h1>
					<p>Create an account to get started!</p>
				</div>
			)}
		</div>
	)
}

export default Workouts

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	tryGetUserWorkouts,
	tryGetExercises,
	tryDeleteUserWorkout,
	setAdding,
	setEditing,
} from './actions'
import EditableRow from './EditableRow'
import './tracker.css'
import { sortWorkoutsByDate } from './helpers'

const Tracker = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
	const userWorkouts = useSelector((state) => sortWorkoutsByDate(state.tracker.userWorkouts))
	const isAdding = useSelector((state) => state.tracker.isAddingTracker)
	const isEditing = useSelector((state) => state.tracker.isEditingTracker)
	const editedWorkout = useSelector((state) => state.tracker.editingWorkout)

	const dispatch = useDispatch()
	const userToken = JSON.parse(window.localStorage.getItem('workoutTracker')).token

	useEffect(() => {
		if (isLoggedIn) {
			dispatch(tryGetUserWorkouts(userToken))
			dispatch(tryGetExercises())
		}
	}, [isLoggedIn, userToken, dispatch])

	const handleDelete = (id) => {
		dispatch(tryDeleteUserWorkout(id))
	}

	return (
		<div className='user-workout-container'>
			<h1 className='header-base'>Track Your Workouts</h1>
			{isAdding || isEditing ? (
				<button
					className='add-button clickable'
					onClick={() => {
						isAdding ? dispatch(setAdding(false)) : dispatch(setEditing(false, null))
					}}
				>
					<i className='fas fa-minus'></i> Cancel
				</button>
			) : (
				<button className='add-button clickable' onClick={() => dispatch(setAdding(true))}>
					<i className='fas fa-plus'></i>
					Add New Workout
				</button>
			)}

			<div className='table-container' role='table'>
				<div className='table-row'>
					<div className='column-header table-cell'>Exercise</div>
					<div className='column-header table-cell'>Date</div>
					<div className='column-header table-cell'>Tracked Metric</div>
					<div className='column-header table-cell'>Actions</div>
				</div>
				{isAdding && <EditableRow workoutObject={null} />}
				{userWorkouts.map((workout) => {
					if (isEditing && editedWorkout._id === workout._id) {
						return <EditableRow workoutObject={workout} key={workout._id} />
					} else {
						return (
							<div className='table-row' key={workout._id}>
								<div className='table-cell'>{workout.exercise}</div>
								<div className='table-cell'>{workout.date}</div>
								<div className='table-cell'>{`${workout.trackedMetric} ${workout.metricType}`}</div>
								<div className='table-cell'>
									<i
										className='fas fa-edit blue-icon clickable'
										onClick={() => dispatch(setEditing(true, workout))}
									></i>
									<i
										className='fas fa-trash-alt red-icon clickable'
										onClick={() => handleDelete(workout._id)}
									></i>
								</div>
							</div>
						)
					}
				})}
			</div>
		</div>
	)
}

export default Tracker

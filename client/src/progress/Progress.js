import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	tryGetUserWorkouts
} from '../tracker/actions'
import { sortWorkoutsByDate } from '../tracker/helpers'
import Graph from './Graph'
import './Progress.css'

const Progress = () => {
	const [ selectedExercise, setSelectedExercise ] = useState('')
	const [ chartData, setChartData ] = useState([])

	const availableExercises = useSelector((state) => state.tracker.uniqueUserExercises)
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
	const initialData = useSelector((state) => state.tracker.userWorkouts)

	const dispatch = useDispatch()
	const userToken = JSON.parse(window.localStorage.getItem('workoutTracker')).token

	useEffect(() => {
		if (isLoggedIn && initialData.length === 0) {
			dispatch(tryGetUserWorkouts(userToken))
		}
	}, [isLoggedIn, initialData, userToken, dispatch])

	useEffect(() => {
		if (selectedExercise) {
			const filteredData = filterData(selectedExercise)
			filteredData.forEach(workout => {
				workout.date = new Date(workout.date)
				workout.trackedMetric = Number(workout.trackedMetric)
			})
			setChartData(sortWorkoutsByDate(filteredData))
		}
	}, [selectedExercise])

	const filterData = (exercise) => {
		let dataCopy = JSON.parse(JSON.stringify(initialData))
		return dataCopy.filter(workout => {
			if (workout.exercise === exercise)
			return workout
		} )
	}

	return (
		<div className='progress-container'>
		<h1>Track Your Progress</h1>
		<div className='graph-section'>
		<h2>Choose an exercise to populate the graph</h2>
			<select onChange={(e) => setSelectedExercise(e.target.value)} defaultValue='none'>
			<option value='none' disabled>Select an Exercise</option>
			{availableExercises.map(exercise => (
				<option key={exercise} value={exercise}>{exercise}</option>
			))}
		</select>
		<Graph key={selectedExercise} chartData={chartData} />
		</div>
		</div>
	)
}

export default Progress

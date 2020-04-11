import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	trySaveUserWorkout,
	tryEditUserWorkout,
	setAdding,
	setEditing,
	setAddingExercise,
} from './actions'
import { dateHelper } from './helpers'
import AddExerciseModal from './AddNewExerciseModal/AddExerciseModal'

const EditableRow = ({ workoutObject }) => {
	const [exercise, setExercise] = useState('')
	const [date, setDate] = useState(dateHelper())
	const [trackedMetric, setTrackedMetric] = useState('')
	const [metricType, setMetricType] = useState('')

	const exerciseList = useSelector((state) => state.tracker.exercises)
	const editedWorkout = useSelector((state) => state.tracker.editingWorkout)
	const showModal = useSelector((state) => state.tracker.isAddingExercise)
	const dispatch = useDispatch()
	const userToken = JSON.parse(window.localStorage.getItem('workoutTracker')).token

	useEffect(() => {
		if (workoutObject) {
			setExercise(editedWorkout.exercise)
			setDate(editedWorkout.date)
			setTrackedMetric(editedWorkout.trackedMetric)
			setMetricType(editedWorkout.metricType)
		}
	}, [workoutObject, editedWorkout])

	let newWorkoutObj = {
		exercise,
		date,
		trackedMetric,
		metricType,
	}

	const handleSave = () => {
		const validated = validateNewWorkoutObj()
		if (!validated.status) {
			return alert(`${validated.key} must be entered before saving!`)
		} else {
			dispatch(trySaveUserWorkout(userToken, newWorkoutObj))
			resetInputs()
			dispatch(setAdding(false))
		}
	}

	const handleEdit = () => {
		const validated = validateNewWorkoutObj()
		if (!validated.status) {
			return alert(`${validated.key} must be entered before saving!`)
		} else {
			dispatch(tryEditUserWorkout(editedWorkout._id, newWorkoutObj))
			dispatch(setEditing(false, null))
			resetInputs()
		}
	}

	const validateNewWorkoutObj = () => {
		for (let [key, value] of Object.entries(newWorkoutObj)) {
			if (value === '') {
				return { status: false, key }
			}
			return { status: true }
		}
	}

	const resetInputs = () => {
		setExercise('')
		setDate(dateHelper())
		setTrackedMetric('')
		setMetricType('')
	}

	return (
		<div className='table-row'>
			<div className='table-cell'>
				<select
					id='new-exercise'
					defaultValue={workoutObject ? editedWorkout.exercise : 'none'}
					onChange={(e) => setExercise(e.target.value)}
				>
					<option value='none' disabled>
						Exercises
					</option>
					{exerciseList.map((eachExercise) => (
						<option key={eachExercise.id} value={eachExercise.name}>
							{eachExercise.name}
						</option>
					))}
				</select>
				<p>
					<button
						onClick={() => dispatch(setAddingExercise(true))}
						className=' button new-button clickable'
					>
						Add New Exercise
					</button>
				</p>
			</div>
			<div className='table-cell'>
				<input
					id='new-date'
					type='date'
					defaultValue={workoutObject ? editedWorkout.date : date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</div>
			<div className='table-cell'>
				<input
					id='new-tracking'
					type='text'
					defaultValue={workoutObject ? editedWorkout.trackedMetric : ''}
					onChange={(e) => setTrackedMetric(e.target.value)}
				/>
				<span className='metric-radios'>
					{['reps', 'mins', 'lbs', 'mi/km'].map((metric, index) => (
						<label key={index}>
							<input
								name='new-metric'
								type='radio'
								value={metric}
								defaultChecked={
									workoutObject && editedWorkout.metricType === metric
										? true
										: false
								}
								onChange={(e) => setMetricType(e.target.value)}
							/>
							{metric}
						</label>
					))}
				</span>
			</div>
			<div className='table-cell'>
				<button
					onClick={workoutObject ? handleEdit : handleSave}
					className='button save-button clickable'
				>
					Save
				</button>
			</div>
			{showModal && <AddExerciseModal />}
		</div>
	)
}

export default EditableRow

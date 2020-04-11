import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAddingExercise, tryAddNewExercise } from '../actions'
import './addexercisemodal.css'

const AddExerciseModal = () => {
	const [newExercise, setNewExercise] = useState('')
	const [validationError, setValidationError] = useState('')

	const exerciseList = useSelector((state) => state.tracker.exercises)
	const dispatch = useDispatch()

	const handleSave = () => {
		const duplicates = exerciseList.filter((exercise) => exercise.name === newExercise)
		if (duplicates.length > 0) {
			return setValidationError(
				`${newExercise} already exists in exercise list. Please try another exercise.`
			)
		}
		dispatch(tryAddNewExercise(newExercise))
	}

	return (
		<div>
			<div className='modal-overlay' onClick={() => dispatch(setAddingExercise(false))}></div>
			<div className='modal'>
				<button
					className='close-button clickable'
					onClick={() => dispatch(setAddingExercise(false))}
				>
					<i className='fas fa-times'></i>
				</button>
				<div className='modal-content'>
					<h1>Add an Exercise</h1>
					<p>
						Enter in an exercise name in the box below. It must be unique and not
						already in the existing exercise list.
					</p>
					<input
						autoFocus
						value={newExercise}
						onChange={(e) => setNewExercise(e.target.value)}
					/>
					{validationError && <p className='error-message'>{validationError}</p>}
					<button onClick={handleSave} className='button save-button clickable'>
						Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddExerciseModal

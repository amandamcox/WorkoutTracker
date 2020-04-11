import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tryAddNewExercise } from '../actions'
import './addexercisemodal.css'

const AddExerciseModal = ({ onClose }) => {
	const [newExercise, setNewExercise] = useState('')

	const hasError = useSelector((state) => state.tracker.error)
	const dispatch = useDispatch()

	const handleSubmit = async () => {
		dispatch(tryAddNewExercise(newExercise))
		onClose()
	}

	return (
		<div>
			<div className='modal-overlay' onClick={onClose}></div>
			<div className='modal'>
				<button className='close-button' onClick={onClose}>
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
					{hasError && (
						<p className='error-message'>
							Exercise is either not unique or addition failed. Please try again.
						</p>
					)}
					<button onClick={handleSubmit} className='button save-button clickable'>
						Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddExerciseModal

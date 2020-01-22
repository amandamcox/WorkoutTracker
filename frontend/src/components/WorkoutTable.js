import React, { useState } from 'react'
import EditableInput from './EditableInput'
import exercises from '../statics/exerciseDataSet'

const WorkoutTable = ({ workoutData, onDelete, onEdit }) => {
	const [editedValue, setEditedValue] = useState('')

	const handleDelete = id => {
		onDelete(id)
	}

	const handleEdit = (id, field) => {
		if (editedValue !== '') {
			let editObject = {}
			field === 'date'
				? (editObject[field] = `${editedValue}T08:00:00.000Z`)
				: (editObject[field] = editedValue)
			onEdit(id, editObject)
		} else {
			alert('You must enter a value')
		}
	}

	const getExerciseMetric = savedObject => {
		const exerciseObj = exercises.find(exercise => savedObject.exercise === exercise.exercise)
		if (exerciseObj.trackingType === 'reps') {
			return 'reps'
		} else if (exerciseObj.trackingType === 'time') {
			return 'min'
		} else if (exerciseObj.trackingType === 'distance') {
			return 'miles'
		} else if (exerciseObj.trackingType === 'weight') {
			return 'lbs'
		}
	}

	return (
		<div className='ui segment' role='table'>
			<div className='table-header table-group' role='rowgroup'>
				<div role='columnheader'>Workout Type</div>
				<div role='columnheader'>Date</div>
				<div role='columnheader'>Tracking Metric</div>
				<div role='columnheader'>Actions</div>
			</div>
			{workoutData.map(row => (
				<div className='table-group' role='rowgroup' key={row._id}>
					<div className='ui input' role='cell'>
						<span>{row.exercise}</span>
					</div>
					<div className='ui input' role='cell'>
						<EditableInput
							text={new Date(row.date).toLocaleDateString()}
							childSave={handleEdit}
						>
							<input
								id={row._id}
								type='date'
								name='date'
								className='edit-inputs'
								placeholder={new Date(row.date).toLocaleDateString()}
								onChange={e => setEditedValue(e.target.value)}
							/>
						</EditableInput>
					</div>
					<div className='ui input' role='cell'>
						<EditableInput
							text={`${row.trackedMetric} ${getExerciseMetric(row)}`}
							childSave={handleEdit}
						>
							<input
								id={row._id}
								type='text'
								name='trackedMetric'
								className='edit-inputs'
								placeholder={String(row.trackedMetric)}
								onChange={e => setEditedValue(e.target.value)}
							/>
						</EditableInput>
					</div>
					<div role='cell'>
						<i
							className='trash alternate outline icon clickable-icon red'
							onClick={() => handleDelete(row._id)}
						></i>
					</div>
				</div>
			))}
		</div>
	)
}

export default WorkoutTable

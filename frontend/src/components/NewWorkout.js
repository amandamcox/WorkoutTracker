import React, { useState } from 'react'
import exercises from '../statics/exerciseDataSet'

const NewWorkout = ({ onSave }) => {
	const [exerciseSelection, setExerciseSelection] = useState('')

	const handleSave = () => {
		const newRecord = {
			exercise: document.getElementById('new-exercise').value,
			date: new Date(`${document.getElementById('new-date').value}T08:00:00.000Z`),
			trackedMetric: document.getElementById('new-tracking').value,
		}
		onSave(newRecord)
	}

	const determineTracking = () => {
		const chosenIndex = document.getElementById('new-exercise').options.selectedIndex
		const tracking = document
			.getElementById('new-exercise')
			.options[chosenIndex].getAttribute('tracking')
		if (tracking === 'reps') {
			return 'How many reps?'
		} else if (tracking === 'time') {
			return 'How long (in minutes)?'
		} else if (tracking === 'distance') {
			return 'How far (in miles)?'
		} else if (tracking === 'weight') {
			return 'How much weight (in pounds)?'
		}
	}

	return (
		<div className='ui form segment' role='rowgroup'>
			<div className='new-exercise-group'>
				<div className='ui dropdown align-table-content' role='cell'>
					<label>
						Exercise
						<select
							id='new-exercise'
							onChange={e => setExerciseSelection(e.target.value)}
						>
							<option value=''>Exercises</option>
							{exercises.map(exercise => (
								<option
									key={exercise.exercise}
									value={exercise.exercise}
									tracking={exercise.trackingType}
								>
									{exercise.exercise}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className='ui input dropdown align-table-content' role='cell'>
					<label>
						Date
						<input
							id='new-date'
							type='date'
							defaultValue={new Date()
								.toLocaleDateString('zh', {
									year: 'numeric',
									month: '2-digit',
									day: '2-digit',
								})
								.split('/')
								.join('-')}
						/>
					</label>
				</div>
				<div className='ui input align-table-content' role='cell'>
					{exerciseSelection ? (
						<label>
							{determineTracking()}
							<input id='new-tracking' type='text' />
						</label>
					) : (
						<div className='ui input disabled'>
							<label>
								Reps/Time/Dis/lbs
								<input id='new-tracking' type='text' placeholder='Tracked Metric' />
							</label>
						</div>
					)}
				</div>
				<div className='align-table-content align-button' role='cell'>
					<button onClick={handleSave} className='ui right labeled icon blue button'>
						<i className='save icon'></i>
						Save
					</button>
				</div>
			</div>
		</div>
	)
}

export default NewWorkout

import React, { useState } from 'react'
import exercises from '../statics/exerciseDataSet'

const NewWorkout = ({ onSave }) => {
	const dateHelper = () => {
		const today = new Date()
		let day = today.getDate()
		let month = today.getMonth() + 1
		const year = today.getFullYear()
		if (day < 10) day = '0' + day
		if (month < 10) month = '0' + month
		return `${year}-${month}-${day}`
	}

	const [exerciseSelection, setExerciseSelection] = useState('')
	const [dateSelection, setDateSelection] = useState(dateHelper())
	const [trackedMetricSelection, setTrackedMetricSelection] = useState('')
	const [metricSelection, setMetricSelection] = useState('')

	const handleSave = () => {
		const newRecord = {
			exercise: exerciseSelection,
			date: dateSelection,
			trackedMetric: trackedMetricSelection,
			metricType: metricSelection,
		}
		onSave(newRecord)
	}

	return (
		<div className='ui form segment' role='rowgroup'>
			<div className='new-exercise-group'>
				<div className='ui dropdown field align-table-content' role='cell'>
					<label>
						Exercise
						<select
							id='new-exercise'
							onChange={e => setExerciseSelection(e.target.value)}
						>
							<option value=''>Exercises</option>
							{exercises.map(exercise => (
								<option key={exercise.exercise} value={exercise.exercise}>
									{exercise.exercise}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className='ui input field dropdown align-table-content' role='cell'>
					<label>
						Date
						<input
							id='new-date'
							type='date'
							defaultValue={dateHelper()}
							onChange={e => setDateSelection(e.target.value)}
						/>
					</label>
				</div>
				<div className='ui input field block align-table-content' role='cell'>
					<React.Fragment>
						<label>
							Reps/Time/Dis/lbs
							<input
								id='new-tracking'
								type='text'
								placeholder='30'
								onChange={e => setTrackedMetricSelection(e.target.value)}
							/>
						</label>
						<div>
							<label className='radio-buttons'>
								Reps
								<input
									name='new-metric'
									type='radio'
									tabIndex='0'
									value='reps'
									onChange={e => setMetricSelection(e.target.value)}
								/>
								<span className='custom-radio'></span>
							</label>
							<label className='radio-buttons'>
								Minutes
								<input
									name='new-metric'
									type='radio'
									tabIndex='0'
									value='minutes'
									onChange={e => setMetricSelection(e.target.value)}
								/>
								<span className='custom-radio'></span>
							</label>
							<label className='radio-buttons'>
								Miles
								<input
									name='new-metric'
									type='radio'
									tabIndex='0'
									value='miles'
									onChange={e => setMetricSelection(e.target.value)}
								/>
								<span className='custom-radio'></span>
							</label>
							<label className='radio-buttons'>
								lbs
								<input
									name='new-metric'
									type='radio'
									tabIndex='0'
									value='pounds'
									onChange={e => setMetricSelection(e.target.value)}
								/>
								<span className='custom-radio'></span>
							</label>
						</div>
					</React.Fragment>
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

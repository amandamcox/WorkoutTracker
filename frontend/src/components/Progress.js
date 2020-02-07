import React, { useState, useEffect } from 'react'
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory'
import workoutService from '../services/workouts'

const Home = () => {
	const [chartData, setChartData] = useState([])
	const [savedExercises, setSavedExercises] = useState([])
	const [selectedExercise, setSelectedExercise] = useState('')

	useEffect(() => {
		const getChartData = async () => {
			const req = await workoutService.getAll()
			const convertDataForChart = req.map(datapoint => {
				datapoint.date = new Date(datapoint.date)
				datapoint.trackedMetric = parseInt(datapoint.trackedMetric)
				return datapoint
			})
			setChartData(convertDataForChart)

			const onlyExercises = req.map(datapoint => datapoint.exercise)
			const uniqueExercises = [...new Set(onlyExercises)].sort()
			setSavedExercises(uniqueExercises)
		}
		getChartData()
	}, [])

	const handleGraphLoad = () => {
		const onlySelectedData = chartData.filter(
			datapoint => datapoint.exercise === selectedExercise
		)
		if (onlySelectedData.length === 0) {
			return (
				<div className='graph-message'>
					Pick an exercise to see how you've progressed over time!
				</div>
			)
		} else if (onlySelectedData.length === 1) {
			return (
				<div className='graph-message'>
					You've only entered 1 datapoint for this exercise. To track progress, add at
					least 1 more.
				</div>
			)
		} else if (onlySelectedData.length > 1) {
			return (
				<VictoryChart
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}
					height={250}
					padding={{ top: 10, right: 20, bottom: 30, left: 30 }}
				>
					<VictoryLine
						data={onlySelectedData}
						x='date'
						y='trackedMetric'
						style={{
							data: { stroke: 'blue', strokeWidth: 3 },
						}}
					/>
					<VictoryAxis
						label='time'
						fixLabelOverlap={true}
						tickFormat={t => new Date(t).toLocaleDateString()}
						scale={{ x: 'time' }}
						style={{
							tickLabels: { fontSize: 7, padding: 5 },
							axisLabel: { padding: 20, fontSize: 10 },
						}}
					/>
					<VictoryAxis
						dependentAxis={true}
						label={onlySelectedData[0].metricType}
						style={{
							tickLabels: { fontSize: 7, padding: 5 },
							axisLabel: { padding: 20, fontSize: 10 },
						}}
					/>
				</VictoryChart>
			)
		}
	}

	return (
		<div className='ui container container-padding'>
			<div>
				<h1>Track your progress over time</h1>
				<h4 className='bottom-margin'>
					You're doing great! How great? Pull up a graph of one of the exercises you've
					logged to find out.
				</h4>
				<select
					name='chartExercise'
					defaultValue={'default'}
					onChange={e => setSelectedExercise(e.target.value)}
					className='graph-drop-down'
				>
					<option disabled value='default'>
						Choose an Exercise
					</option>
					{savedExercises.map((exercise, index) => (
						<option key={index}>{exercise}</option>
					))}
				</select>
			</div>

			<div className='graph-style'>{handleGraphLoad()}</div>
		</div>
	)
}

export default Home

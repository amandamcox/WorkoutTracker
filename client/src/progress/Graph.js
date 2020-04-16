import React, { useEffect } from 'react'
import * as d3 from 'd3'

const Graph = ({ chartData }) => {
	useEffect(() => {
		if (chartData && chartData.length) {
			const svgElement = d3.select('svg')
			svgElement.remove()
			createChart(chartData)
		}
	}, [chartData])

	const createChart = chartData => {
		const svg = d3.select('#chart').append('svg').attr('class', 'chart-svg')
		const currentWidth = parseInt(d3.select('#chart').style('width'), 10)
		const height = currentWidth / 1.5

		let xScale = d3
			.scaleTime()
			.range([30, currentWidth - 10])
			.domain(d3.extent(chartData, d => d.date))
		let yScale = d3
			.scaleLinear()
			.range([0, height - 20])
			.domain([d3.max(chartData, d => d.trackedMetric), 0])

		let xAxis = d3
			.axisBottom()
			.scale(xScale)
			.tickFormat(d3.timeFormat('%m/%d'))
			.tickSize(-2)
		let yAxis = d3
			.axisLeft()
			.scale(yScale)
			.tickFormat(d => d)
			.tickSize(-(currentWidth - 30))

		const lineGenerator = d3
			.line()
			.x(d => xScale(d.date))
			.y(d => yScale(d.trackedMetric))

		svg.attr('width', currentWidth)
		svg.attr('height', height)
		svg.append('path')
			.attr('class', 'line-path')
			.attr('d', lineGenerator(chartData))

		svg.append('g')
			.call(xAxis)
			.attr('class', 'x-axis')
			.attr('transform', `translate(0, ${height - 15})`)
		svg.append('g')
			.call(yAxis)
			.attr('transform', `translate(30, 5)`)
			.attr('class', 'y-axis')
			.append('text')
			.text(chartData[0].metricType)
			.attr('class', 'axis-label')
			.attr('y', -60)
			.attr('x', -height / 2)
			.attr('transform', `rotate(-90)`)
			.attr('text-anchor', 'middle')
	}

	return <div id='chart'></div>
}

export default Graph

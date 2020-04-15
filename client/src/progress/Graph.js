import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Graph = ({ chartData }) => {
	const ref = useRef()
	useEffect(() => {
		if (chartData && chartData.length) {
			const svgElement = d3.select(ref.current)
			svgElement.selectAll('g').remove()

			let xAxis = d3
				.axisBottom()
				.scale(xScale)
				.tickFormat(d3.timeFormat('%b %d'))
				.tickSize(-2)
			let yAxis = d3
				.axisLeft()
				.scale(yScale)
				.tickFormat(d => d)
				.tickSize(-innerWidth)
			svgElement
				.append('g')
				.call(xAxis)
				.attr('transform', `translate(0, ${innerHeight})`)
			svgElement
				.append('g')
				.call(yAxis)
				.attr('transform', `translate(${margin.left}, 0)`)
				.append('text')
				.text(chartData[0].metricType)
				.attr('class', 'axis-label')
				.attr('y', -60)
				.attr('x', -innerHeight / 2)
				.attr('transform', `rotate(-90)`)
				.attr('text-anchor', 'middle')
		}
	}, [chartData])

	const margin = { top: 50, right: 10, bottom: 50, left: 90 }
	const width = 800
	const height = 500
	const innerWidth = width - margin.left - margin.right
	const innerHeight = height - margin.top

	const timeDomain = d3.extent(chartData, d => d.date)
	const metricMax = d3.max(chartData, d => d.trackedMetric)

	let xScale = d3
		.scaleTime()
		.range([margin.left, width - margin.right])
		.domain(timeDomain)
	let yScale = d3
		.scaleLinear()
		.range([margin.bottom, height - margin.top])
		.domain([metricMax, 0])

	const lineGenerator = d3.line()
	lineGenerator.x(d => xScale(d.date))
	lineGenerator.y(d => yScale(d.trackedMetric))

	return (
		<div>
			<svg width={width} height={height} ref={ref}>
				<path
					d={lineGenerator(chartData)}
					fill='none'
					stroke='#000000'
				/>
			</svg>
		</div>
	)
}

export default Graph

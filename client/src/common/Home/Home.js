import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Home.css'

const Home = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

	return (
		<div>
			<div className='hero-image'>
				<div className='hero-text-box'>
					<h1 className='header-base'>Liberate Your Workouts</h1>
					<p>
						Ever go to the gym and have trouble remembering what you lifted last time?
						Training for a marathon and need to map out your progress? Or maybe you just
						want to see where your fitness journey is taking you?
					</p>
					<p>
						That's where this Workout Tracker comes in. Simply enter in how much you
						lifted, how far you ran, how long you cycled, or whatever metric you want to
						track. Then see how you're progressing over time! It couldn't be more
						simple!
					</p>
					{isLoggedIn ? (
						<Link to='/track'>
							<button className='hero-button clickable'>Get Tracking!</button>
						</Link>
					) : (
						<Link to='/createaccount'>
							<button className='hero-button clickable'>Create An Account!</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default Home

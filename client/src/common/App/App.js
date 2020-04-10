import React, { useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { receiveLogin } from '../../auth/actions.js'
import Routes from '../Routes'
import './App.css'

const App = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
	const dispatch = useDispatch()

	useEffect(() => {
		const savedToken = window.localStorage.getItem('workoutTracker')
		if (savedToken && savedToken !== 'undefined') {
			dispatch(receiveLogin(JSON.parse(savedToken)))
		}
	}, [dispatch])

	return (
		<div>
			<Router>
				<header>
					<nav>
						<ul className='menu'>
							<li className='logo'>
								<Link to='/'>
									<i className='fas fa-dumbbell'></i>
									Workout Tracker
								</Link>
							</li>
							{isLoggedIn ? (
								<React.Fragment>
									<li className='nav-item'>
										<Link to='/track'>Add Workout</Link>
									</li>
									<li className='nav-item'>
										<Link to='/progress'>View Progress</Link>
									</li>
									<li className='nav-item button'>
										<Link to='/logout'>Log Out</Link>
									</li>
								</React.Fragment>
							) : (
								<React.Fragment>
									<li className='nav-item button'>
										<Link to='/login'>Log In</Link>
									</li>
									<li className='nav-item button secondary'>
										<Link to='/createaccount'>Sign Up</Link>
									</li>
								</React.Fragment>
							)}
							<li className='toggle'>
								<a>
									<i className='fas fa-bars'></i>
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<section>
					<Routes />
				</section>
				<footer></footer>
			</Router>
		</div>
	)
}

export default App

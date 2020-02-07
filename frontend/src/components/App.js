import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import workoutService from '../services/workouts'
import Workouts from './Workouts'
import Login from './Login'
import Progress from './Progress'
import Home from './Home'
import CreateAccount from './CreateAccount'

const App = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const loggedInUser = window.localStorage.getItem('workoutTrackLoggedInUser')
		if (loggedInUser) {
			const user = JSON.parse(loggedInUser)
			setUser(user)
			workoutService.setToken(user.token)
		}
	}, [])

	const handleUsers = loginData => {
		setUser(loginData)
	}

	const handleLogOut = () => {
		window.localStorage.removeItem('workoutTrackLoggedInUser')
		setUser(null)
	}

	return (
		<div>
			<Router>
				<div>
					<div id='navigation' className='ui secondary pointing stackable menu'>
						<NavLink exact to='/' className='item' activeClassName='active'>
							Home
						</NavLink>
						<NavLink exact to='/workouts' className='item' activeClassName='active'>
							Add/View Workouts
						</NavLink>
						<NavLink exact to='/progress' className='item' activeClassName='active'>
							Track Progress
						</NavLink>
						<div className='right menu'>
							{user ? (
								<div className='item clickable-icon' onClick={handleLogOut}>
									Log Out
								</div>
							) : (
								<NavLink
									exact
									to='/createaccount'
									className='item'
									activeClassName='active'
								>
									Sign Up
								</NavLink>
							)}
						</div>
					</div>
					<div>
						<Route exact path='/' render={() => <Home />} />
						<Route exact path='/workouts' render={() => <Workouts loggedIn={user} />} />
						<Route exact path='/progress' render={() => <Progress />} />
						<Route
							exact
							path='/login'
							render={() => <Login userData={handleUsers} />}
						/>
						<Route
							exact
							path='/createaccount'
							render={() => <CreateAccount userData={handleUsers} />}
						/>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App

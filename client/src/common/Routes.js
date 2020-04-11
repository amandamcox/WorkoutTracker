import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Tracker from '../tracker/Tracker/Tracker'
import Progress from '../progress/Progress'
import Home from './Home/Home'
import CreateAccount from '../auth/CreateAccount'
import Login from '../auth/Login'
import Logout from '../auth/Logout'

const Routes = () => (
	<Switch>
		<Route path='/track'>
			<Tracker />
		</Route>
		<Route path='/progress'>
			<Progress />
		</Route>
		<Route path='/createaccount'>
			<CreateAccount />
		</Route>
		<Route path='/login'>
			<Login />
		</Route>
		<Route path='/logout'>
			<Logout />
		</Route>
		<Route path='/'>
			<Home />
		</Route>
	</Switch>
)

export default Routes

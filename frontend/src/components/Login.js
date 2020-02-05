import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import loginService from '../services/login'
import workoutService from '../services/workouts'

const Login = ({ userData }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	let history = useHistory()

	const handleLogin = async event => {
		event.preventDefault()
		try {
			const user = await loginService.login({ username, password })
			window.localStorage.setItem('workoutTrackLoggedInUser', JSON.stringify(user))
			workoutService.setToken(user.token)
			userData(user)
			setUsername('')
			setPassword('')
			history.push('/workouts')
		} catch (error) {
			alert(error)
		}
	}

	return (
		<div className='ui form container container-padding'>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<div className='field'>
					<label>
						Username:
						<input
							type='text'
							value={username}
							name='username'
							onChange={e => setUsername(e.target.value)}
						/>
					</label>
				</div>
				<div className='field'>
					<label>
						Password:
						<input
							type='password'
							value={password}
							name='password'
							onChange={e => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<button type='submit' className='ui primary button'>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login

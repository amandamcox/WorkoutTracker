import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import accountService from '../services/createAccount'
import workoutService from '../services/workouts'

const CreateAccount = ({ userData }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')

	let history = useHistory()

	const handleCreateAccount = async event => {
		event.preventDefault()
		try {
			const user = await accountService.createAccount({ username, password, name })
			window.localStorage.setItem('workoutTrackLoggedInUser', JSON.stringify(user))
			workoutService.setToken(user.token)
			userData(user)
			setName('')
			setUsername('')
			setPassword('')
			history.push('/workouts')
		} catch (error) {
			alert(`The username, ${username}, already exists. Please pick another one.`)
		}
	}

	return (
		<div className='ui container container-padding'>
			<h1>Create an account</h1>
			<form className='ui form' onSubmit={handleCreateAccount}>
				<div className='field'>
					<label>
						Full Name:
						<input type='text' value={name} onChange={e => setName(e.target.value)} />
					</label>
				</div>
				<div className='field'>
					<label>
						Username:
						<input
							type='text'
							value={username}
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
							onChange={e => setPassword(e.target.value)}
						/>
					</label>
				</div>

				<button type='submit' className='ui primary button'>
					Create Account
				</button>
			</form>
			<div className='ui segment info-message'>
				Already have an account? <Link to='/login'>Log in.</Link>
			</div>
		</div>
	)
}

export default CreateAccount

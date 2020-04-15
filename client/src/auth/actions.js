import authService from './service'
import { tryGetUserWorkouts } from '../tracker/actions'

const requestLogin = () => {
	return {
		type: 'REQUEST_LOGIN',
	}
}

export const receiveLogin = loginData => {
	return {
		type: 'RECEIVE_LOGIN',
		payload: loginData,
		loginAt: Date.now(),
	}
}

export const tryLogin = credentials => {
	return async dispatch => {
		dispatch(requestLogin())
		try {
			const res = await authService.login(credentials)
			if (res) {
				dispatch(tryGetUserWorkouts(res.token))
			}
			return dispatch(receiveLogin(res))
		} catch (error) {
			dispatch(receiveError(error))
		}
	}
}

export const tryCreateAccount = userData => {
	return async dispatch => {
		dispatch(requestLogin())
		try {
			const res = await authService.createAccount(userData)
			return dispatch(receiveLogin(res))
		} catch (error) {
			dispatch(receiveError(error))
		}
	}
}

export const logOut = () => {
	return {
		type: 'LOG_OUT',
	}
}

const receiveError = error => {
	return {
		type: 'AUTH_ERROR',
		error,
	}
}

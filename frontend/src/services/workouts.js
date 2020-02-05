import axios from 'axios'

const apiBase = 'http://localhost:3001/api/workouts'

let token = null

const setToken = newToken => (token = `bearer ${newToken}`)

const getAll = async () => {
	const headers = {
		headers: { Authorization: token },
	}
	const req = await axios.get(apiBase, headers)
	return req.data
}

const saveRecord = async newObject => {
	const headers = {
		headers: { Authorization: token },
	}
	const req = await axios.post(apiBase, newObject, headers)
	return req.data
}

const updateRecord = async (id, newObject) => {
	const req = await axios.patch(`${apiBase}/${id}`, newObject)
	return req.data
}

const deleteRecord = async id => {
	const req = await axios.delete(`${apiBase}/${id}`)
	return req.data
}

export default { getAll, saveRecord, updateRecord, deleteRecord, setToken }

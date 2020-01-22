import axios from 'axios'

const apiBase = '/api/workouts'

const getAll = async () => {
	const req = await axios.get(apiBase)
	return req.data
}

const saveRecord = async newObject => {
	const req = await axios.post(apiBase, newObject)
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

export default { getAll, saveRecord, updateRecord, deleteRecord }

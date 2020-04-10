export const sortWorkoutsByDate = (userWorkoutsFromState) => {
	return userWorkoutsFromState.sort((a, b) => {
		if (Date.parse(a.date) > Date.parse(b.date)) {
			return -1
		}
		if (Date.parse(a.date) < Date.parse(b.date)) {
			return 1
		}
		return 0
	})
}

export const dateHelper = () => {
	const today = new Date()
	let day = today.getDate()
	let month = today.getMonth() + 1
	const year = today.getFullYear()
	if (day < 10) day = '0' + day
	if (month < 10) month = '0' + month
	return `${year}-${month}-${day}`
}

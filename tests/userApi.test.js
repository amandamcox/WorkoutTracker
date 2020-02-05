const User = require('../models/user')
const testHelper = require('./testHelper')

describe('Creating New Users', () => {
	beforeEach(async () => {
		await User.deleteMany({})
		const user = new User({
			username: 'amandarox445',
			password: 'password00',
		})
		await user.save()
	})

	test('Post creation succeeds', async () => {
		const initialData = await testHelper.getUserDataInDB()
		const newUser = {
			username: 'bananamango',
			name: 'Strawberry Tomato',
			password: 'fruitz',
		}
		await api
			.post('/api/users')
			.send(newUser)
			.expect(200)
			.expect('Content Type', /application\/json/)
		const currentData = await testHelper.getUserDataInDB()
		expect(currentData.length).toBe(initialData.length + 1)
		const usernames = currentData.map(u => u.username)
		expect(usernames).toContain(newUser.username)
	})
})

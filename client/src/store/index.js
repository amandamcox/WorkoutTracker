import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import authReducer from '../auth/reducer'
import trackerReducer from '../tracker/reducer'

const rootReducer = combineReducers({
	auth: authReducer,
	tracker: trackerReducer,
})

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store

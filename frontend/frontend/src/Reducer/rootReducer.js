import { combineReducers } from 'redux'
import signinReducer from './signinReducer'
import signupReducer from './signupReducer'

const rootReducer = combineReducers({
    signup : signupReducer,
    signin : signinReducer
})

export default rootReducer;
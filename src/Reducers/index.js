import {combineReducers} from 'redux'
import counterreducer from '../Reducers/reducer'

const rootReducer=combineReducers({
    counter: counterreducer,
});
export default rootReducer;
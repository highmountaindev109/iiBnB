import {combineReducers} from 'redux'
import modalReducer from './modal_reducer'
import filterReducer from './filter_reducer'

export default combineReducers({
    modal: modalReducer,
    filter: filterReducer
})
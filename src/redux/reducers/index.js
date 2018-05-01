import { combineReducers } from 'redux'
import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'
import { input } from './input'

export default combineReducers ({
    todos,
    visibilityFilter,
    input
})
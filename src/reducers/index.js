import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import workDialog from './workDialog'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    workDialog
})

export default todoApp

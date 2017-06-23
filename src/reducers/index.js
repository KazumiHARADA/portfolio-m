import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import workDialog from './workDialog'
import works from './works'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    workDialog,
    works
})

export default todoApp

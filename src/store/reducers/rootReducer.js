import {combineReducers} from 'redux'
import auth from './auth'
import layout from './layout'
import photoloader from './photoloader'
import topicList from './topicList'


export default combineReducers({
    auth,
    layout,
    photoloader,
    topicList,
})

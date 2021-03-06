import { CREATE_NEW_TASK, RESET_TOPIC } from "../actions/actionTypes";

const initialState = {
    tasks: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_TASK:
            return {
                ...state.tasks, tasks: state.tasks.concat(action.newTask)
            }
        case RESET_TOPIC:
            return {
                ...state, tasks: []
            }
        default:
            return state
    }
}
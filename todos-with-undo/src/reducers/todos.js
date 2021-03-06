/**
 * Created by lantu on 2017/11/2.
 */

import undoable from 'redux-undo'

const todos = (state = [],action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? {...todo,completed: !todo.completed} : todo
            )
        default:
            return state
    }
}

const undoableTodos = undoable(todos)

export default undoableTodos;

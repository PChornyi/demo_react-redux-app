import * as ActionTypes from "../actions/todoActions";


const initial = {
    todos: []
};

const TodoReducer = (state = initial, action = {}) => {
    switch (action.type) {
        case ActionTypes.CREATE_TODO_SUCCESS: {
            return [
                ...state,
                action.todo
            ];
        }
        case ActionTypes.GET_TODOS_SUCCESS: {

            return {
                ...state,
                todos: action.todos.data
            }
        }
        case ActionTypes.START_EDITING: {

            return [{
                ...state,
                editing: true
            }
            ];

        }
        case ActionTypes.CANCEL_EDITING: {

            return {
                ...state,
                editing: false
            }

        }
        case ActionTypes.UPDATE_TODO: {

            return [{
                ...state,
                ...action.todo,
                editing: false,
                updating: true
            }]

        }
        case ActionTypes.UPDATE_TODO_SUCCESS: {

            return [{
                ...state,
                ...action.todo,
                updating: false
            }]
        }

        case ActionTypes.DELETE_TODO: {

            return {
                ...state,
                deleting: true
            }

        }
        case ActionTypes.DELETE_TODO_SUCCESS: {
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.todo.id);
            return {
                ...state,
                todos: filteredTodos,
                deleting: false
            }
        }

        default:
            return state.todos
    }

};

export default TodoReducer;
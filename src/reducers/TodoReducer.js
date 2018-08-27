import * as ActionTypes from "../actions/todoActions";

const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.CREATE_TODO_SUCCESS: {
            return [
                ...state,
                action.todo
            ];
        }
        case ActionTypes.GET_TODOS_SUCCESS: {
            return action.todos.data;
        }
        case ActionTypes.START_EDITING: {

            return {
                ...state,
                editing: true
            }

        }
        case ActionTypes.CANCEL_EDITING: {

            return {
                ...state,
                editing: false
            }

        }
        case ActionTypes.UPDATE_TODO: {

            return {
                ...state,
                editing: false,
                updating: true
            }

        }
        case ActionTypes.UPDATE_TODO_SUCCESS: {

            return {
                ...state,
                ...action.todo,
                updating: false
            }
        }

        case ActionTypes.DELETE_TODO: {

            return {
                ...state,
                deleting: true
            }

        }
        case ActionTypes.DELETE_TODO_SUCCESS: {

            return false;

        }

        default:
            return state
    }

};

export default TodoReducer;
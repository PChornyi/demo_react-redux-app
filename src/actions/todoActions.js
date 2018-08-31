import {TodoApi} from "../api/todoApi";

export const CREATE_TODO = '[Todo] CREATE_TODO';
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS';
export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR';

export const GET_TODOS = '[Todo] GET_TODOS';
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR';

export const START_EDITING = '[Todo] START_EDITING';
export const CANCEL_EDITING = '[Todo] CANCEL_EDITING';

export const UPDATE_TODO = '[Todo] UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR';

export const COMPLETE_TODO = 'COMPLETE_TODO';

export const DELETE_TODO = '[Todo] DELETE_TODO';
export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS';
export const DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR';


export function CreateTodo(todo) {
    return (dispatch, getState) => {
        return TodoApi.createTodo(todo).then(res => {
            dispatch(CreateTodoSuccess(res.data))
        })
    }
}

export function CreateTodoSuccess(todo) {
    return {
        type: CREATE_TODO_SUCCESS,
        todo
    }
}

export function GetTodos() {
    return (dispatch) => {
        return TodoApi.getTodo()
            .then(res => {
                dispatch(GetTodoSuccess(res))
            })
            .catch((err) => {
                console.error.bind(err);
            })
    }
}

export function GetTodoSuccess(todos) {
    return {
        type: GET_TODOS_SUCCESS,
        todos
    }
}


export function StartEditing(todo) {
    return {
        type: START_EDITING,
        todo
    }
}

export function CancelEditing(todo) {
    return {
        type: CANCEL_EDITING,
        todo
    }
}

export function UpdateTodo(todo) {
    return (dispatch, getState) => {

        dispatch({
            type: UPDATE_TODO,
            todo
        });
        TodoApi.updateTodo(todo).then(res => {
            dispatch(UpdateTodoSuccess(res.data))
        })
    }
}

export function UpdateTodoSuccess(todo) {
    return {
        type: UPDATE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}

export function DeleteTodo(todo) {
    return (dispatch) => {
        dispatch({
            type: DELETE_TODO,
            todo
        });
      TodoApi.deleteTodo(todo.id)
            .then(res => {
            if (res.status === 200) {
                dispatch(DeleteTodoSuccess(todo.id));
                dispatch(GetTodos())
            }
        })
            // .then())
            .catch((err) => {
                console.error.bind(err);
            })
    }
}

export function DeleteTodoSuccess(_id) {
    return {
        type: DELETE_TODO_SUCCESS,
        _id

    }
}
// componentWillReceiveProps()
// componentDidUpdate()
import {combineReducers} from 'redux';
import TodoListReducer from './TodoReducer';

const rootReducer = combineReducers({
    todos: TodoListReducer,

});
export default rootReducer;
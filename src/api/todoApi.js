import {HttpClient} from './httpClient';

const API = 'http://localhost:8080';

const TODO_API = `${API}/todo`;
const createTodo = todo => {
    return HttpClient.post(TODO_API, todo)
};

const getTodo = () => {
    return HttpClient.get(TODO_API);
};
const updateTodo = todo => {
    return HttpClient.put(TODO_API, todo);
};
const deleteTodo = todo => {
    return HttpClient.delete(`${TODO_API}/${todo.id}`);
};
const TodoApi = {createTodo, getTodo, updateTodo, deleteTodo};
export {TodoApi}
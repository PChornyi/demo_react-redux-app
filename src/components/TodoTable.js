import React from 'react';

import {Table} from 'semantic-ui-react';
import TodoRow from './TodoRow';
import EditTodo from './EditTodo';

const TodoTable = (props) => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Options</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.todos.map(todo =>{
                   if(todo.editing){
                       return <EditTodo
                           editTodo={props.editTodo}
                           cancelEditing={event => props.cancelEditing(todo._id)}
                           key={todo._id}
                           todo={todo}/>
                   } else {
                       return <TodoRow
                       todo ={todo}
                       key = {todo._id}
                       completeTodo = {event => props.completeTodo(todo)}
                       startEditing={event => props.startEditing(todo._id)}
                       deleteTodo={event=> props.deleteTodo(todo)}/>
                   }
                })}
                <EditTodo createTodo={props.createTodo}/>
            </Table.Body>
        </Table>
    )
};
export default TodoTable;
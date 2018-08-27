import React from 'react';
import {Table} from "semantic-ui-react";
import EditTodo from "./EditTodo";
import TodoRow from "./TodoRow";


const TodoContainer = (props) => {

    return (
        <div className="todo-container">
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
                    {props.todos.map(todo => {
                        if (todo.editing) {
                            return <EditTodo todo={todo} key={todo.id}/>
                        } else {
                            return <TodoRow todo={todo} key={todo.id}/>
                        }
                    })}
                    <EditTodo/>
                </Table.Body>
            </Table>
        </div>
    );

};

export default TodoContainer;
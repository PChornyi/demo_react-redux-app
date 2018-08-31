import React, {Component} from 'react';
import {Table} from "semantic-ui-react";
import EditTodo from "./EditTodo";
import {bindActionCreators} from "redux";
import * as todoActions from "../actions/todoActions";

import connect from "react-redux/es/connect/connect";
import TodoRow from "./TodoRow";
// import {PropTypes} from 'prop-types';


class TodoTable extends Component {

    createTodo = (todo) => {
        this.props.actions.CreateTodo(todo);
    };
    startEditing = (todo) => {
        this.props.actions.StartEditing(todo);
    };
    cancelEditing = (todo) => {
        this.props.actions.CancelEditing(todo);
    };
    editTodo = (todo) => {
        this.props.actions.UpdateTodo(todo);
    };
    completeTodo = (todo) => {
        this.props.actions.UpdateTodo({...todo, status: 'done'})
    };

    //Delete
    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo);

    };


    render() {
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
                    {console.log(this.props.todos)}
                    {this.props.todos.map(todo => {

                        if (todo.editing) {
                            return <EditTodo key={todo.id}
                                editTodo={this.editTodo(todo)}
                                cancelEditing={e => this.cancelEditing(todo)}
                                todo={todo}/>
                        } else {
                            return <TodoRow key={todo.id}
                                            todo={todo}
                                            deleteTodo={e => this.deleteTodo(todo)}
                                            startEditing={e => this.startEditing(todo)}
                                            completeTodo={e => this.completeTodo(todo)}/>

                        }
                    })}
                    <EditTodo createTodo={this.createTodo}/>
                </Table.Body>
            </Table>
        );
    };
}
//
// TodoTable.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.object)
//
// };

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);

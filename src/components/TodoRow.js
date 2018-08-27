import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';
import {bindActionCreators} from "redux";
import * as todoActions from "../actions/todoActions";
import connect from "react-redux/es/connect/connect";
import moment from "moment";

class TodoRow extends Component {

    constructor(props) {
        super(props);
        if (this.props.todo) {
            this.state = {
                ...this.props.todo
            }
        } else {
            this.state = {
                ...this.emptyTodo()
            }
        }
    }

    emptyTodo = () => {
        return {title: "", description: "", date: moment()};
    };
    deleteTodo = (event) => {
        this.props.actions.DeleteTodo(this.state)
    };
    completeTodo = (event) => {
        this.props.actions.UpdateTodo({...this.state, status: 'done'})
    };
    startEditing = (event) => {
        this.props.actions.StartEditing(this.state.id)

    };

    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.state.title}</Table.Cell>
                <Table.Cell>{this.state.description}</Table.Cell>
                <Table.Cell>{this.state.date}</Table.Cell>
                <Table.Cell className="options">

                    <Button className="option-buttons" color='green' onClick={this.completeTodo}>
                        <i className="fa fa-check"/>
                    </Button>
                    <Button className="option-buttons" color='blue' onClick={this.startEditing}>
                        <i className="fa fa-pencil"/>
                    </Button>
                    <Button className="option-buttons" color='red' onClick={this.deleteTodo}>
                        <i className="fa fa-trash"/>
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    };
}

// const getClassName = () => {
//
//   return  `${this.state.status
//         ? "updating"
//         : ""}
//     ${this.state.status === 'done'
//         ? "done"
//         : ""}
//     ${this.state.status.deleting
//         ? "deleting"
//         : ""}`
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoRow);
import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';

class TodoRow extends Component {

    render() {
        return (
            <Table.Row className={getClassName(this.props.todo)}>
                <Table.Cell>{this.props.todo.title}</Table.Cell>
                <Table.Cell>{this.props.todo.description}</Table.Cell>
                <Table.Cell>{this.props.todo.date}</Table.Cell>
                <Table.Cell className="options">

                    <Button className="option-buttons" color='green' onClick={this.props.completeTodo}>
                        <i className="fa fa-check"/>
                    </Button>
                    <Button className="option-buttons" color='blue' onClick={this.props.startEditing}>
                        <i className="fa fa-pencil"/>
                    </Button>
                    <Button className="option-buttons" color='red' onClick={this.props.deleteTodo}>
                        <i className="fa fa-trash"/>
                    </Button>
                </Table.Cell>
            </Table.Row>
        );

    };
}
const getClassName = (todo) => {

    return `${todo.updating === 'updating'
        ? "updating"
        : ""}
    ${todo.status === 'done'
        ? "done"
        : ""}
    ${todo.deleting === 'deleting'
        ? "deleting"
        : ""}`

};

export default TodoRow;
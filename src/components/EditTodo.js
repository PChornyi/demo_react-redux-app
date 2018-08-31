import React, {Component} from 'react';
import {Button,Table} from 'semantic-ui-react';
import {Input} from 'semantic-ui-react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {bindActionCreators} from "redux";
import * as todoActions from "../actions/todoActions";
import {connect} from 'react-redux';

class EditTodo extends Component {

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
        return {title: "", description: "", date: moment()}
    };

    changeValue(newValue){
        this.setState({newValue});
    }
    changeNewTitle = (event) => {
        this.setState({title: event.target.value})
    };

    changeNewDescription = (event) => {
        this.setState({description: event.target.value})
    };

    changeNewDate = (event) => {
        this.setState({date: event})
    };

    createTodo = (event) => {
        this.resetTodo();
        this.props.createTodo(this.state)
    };
    editTodo = (event) => {
        this.props.editTodo(this.state);
        this.changeValue(this.state)

    };

    resetTodo = () => {
        this.setState({title: "", description: "", date: moment()})
    };
    cancelEditing = () => {
        this.props.cancelEditing();
    };

    getDateForDatePicker() {
        return moment(this.state.date)
    }

    render() {
        return (
            <Table.Row>
                <Table.Cell>
                    <Input placeholder='Title'
                           value={this.state.title}
                           onChange={this.changeNewTitle}/>
                </Table.Cell>
                <Table.Cell>
                    <Input placeholder='Description'
                           value={this.state.description}
                           onChange={this.changeNewDescription}/>
                </Table.Cell>
                <Table.Cell>
                    <DatePicker dropdownMode="select"
                                selected={this.getDateForDatePicker()}
                                onChange={this.changeNewDate}/>
                </Table.Cell>
                <Options todo={this.props.todo}
                         editTodo={this.editTodo}
                         createTodo={this.createTodo}
                         resetTodo={this.resetTodo}
                         cancelEdit={this.cancelEditing}/>
            </Table.Row>
        )
    }

}
const Options = (props) => {
    if (props.todo && props.todo.editing) {
        return EditOptions(props);
    } else {
        return AddOptions(props)
    }
};
const EditOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.editTodo}>Edit</Button>
            <Button color='blue' onClick={props.cancelEditing}>Cancel</Button>
        </Table.Cell>
    );
};
const AddOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.createTodo}>Create</Button>
            <Button color='blue' onClick={props.resetTodo}>Reset</Button>
        </Table.Cell>
    );
};
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
export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
import React from 'react';

import TodoTable from "./TodoTable";

export const TodoContainer =(props)=> {

        return (
            <div className="todo-container">
                <TodoTable todos={props.todos} />
            </div>
        )
  } ;

export default TodoContainer;
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import TodoContainer from './components/TodoContainer';

const Routes = (props)  => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={TodoContainer}/>
                {/*<Route path="/" >*/}
                    {/*<TodoContainer todos = {props.todos}/>*/}
                {/*</Route>*/}
            </Switch>
        </BrowserRouter>
    )
};
export {Routes};

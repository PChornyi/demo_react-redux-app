import React from 'react';
import './App.css';
import {Routes} from './Route'
import {Provider} from 'react-redux'

import {configureStore} from './store/configureStore';
import * as ActionCreator from './actions/todoActions';

const store = configureStore();

store.dispatch(ActionCreator.GetTodos());

const App = (props) => {
    return (

        <Provider store={store}>
            <Routes/>
        </Provider>
    )
};

export default App;
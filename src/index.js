import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './Route'
import * as TodoActions from './actions/todoActions';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import {configureStore} from "./store/configureStore";

const store = configureStore();

store.dispatch(TodoActions.GetTodos());
ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import MainReducer from './reducers/RootReducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(MainReducer);

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
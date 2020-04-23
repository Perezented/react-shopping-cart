import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './sass/index.scss';
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';

const AppWithRouter = withRouter(App);
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppWithRouter />
        </Router>
    </Provider>,
    document.getElementById('root')
);

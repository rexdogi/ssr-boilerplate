/**
 * Created by Paulius on 8/28/2017.
 */
import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux/index';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(reducers, preloadedState);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>xDD</div>
            </Provider>
        );
    }
}
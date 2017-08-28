/**
 * Created by Paulius on 8/28/2017.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader'
import App from './app';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
};

render(App);

if (module.hot) {
    module.hot.accept(() => {
        render(App)
    })
}

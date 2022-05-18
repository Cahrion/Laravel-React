import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Store from './Store';

class Index extends Component {
    render() {
        return (
            <Provider {...Store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        );
    }
};

ReactDOM.render(<Index />, document.getElementById("index"));
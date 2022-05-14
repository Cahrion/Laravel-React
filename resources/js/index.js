import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Router';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        );
    }
};

ReactDOM.render(<Index />, document.getElementById("index"));
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // import Route, Routes

/* Pages */

import FrontIndex from '../Views/Index';
import FrontLogin from '../Views/Login';
import FrontRegister from '../Views/Register';

const Main = () => (
    <Routes>
        <Route exact path='/' element={<FrontIndex/>}></Route>
        <Route path='/login' element={<FrontLogin/>}></Route>
        <Route path='/register' element={<FrontRegister/>}></Route>
    </Routes>
);
export default Main;
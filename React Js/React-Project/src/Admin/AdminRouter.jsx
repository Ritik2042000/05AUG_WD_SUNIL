import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import Edituser from './Edituser';

class AdminRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<AdminDashboard/>}>
                <Route path='dashboard' element={<AdminDashboard />}/>
                <Route path='edituser/:userId' element={<Edituser />}/>

                </Route>
            </Routes>
        );
    }
}

export default AdminRouter;
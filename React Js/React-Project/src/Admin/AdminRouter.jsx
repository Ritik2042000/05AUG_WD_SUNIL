import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import Alluser from './Alluser';
import Edituser from './Edituser';
import AdminContent from './AdminContent';
import Checklogin from '../checklogin';

class AdminRouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={ <AdminDashboard/>}>
                        <Route path='dashboard' element={<AdminContent />} />
                        <Route path='alluser' element={<Alluser />} />
                        <Route path='edituser/:userId' element={<Edituser />} />
                    </Route>
                </Routes>
            </>                
        );
    }
}

export default AdminRouter;
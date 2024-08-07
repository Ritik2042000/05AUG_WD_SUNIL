import React from 'react';
import Adminpanel from './Slidenav';
import Header from './header'
import MainContent from "./AdminContent.jsx";
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <>
            <div className="d-flex">
                <Adminpanel />
                <div className="d-flex flex-column container-fluid m-0 p-0">
                    <Header />
                    <Outlet />                                  
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
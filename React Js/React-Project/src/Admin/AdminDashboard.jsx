import React from 'react';
import Adminpanel from './Slidenav';
import Header from './header'
import MainContent from "./AdminContent.jsx";

const AdminDashboard = () => {
    return (
        <>
            <div className="d-flex">
                <Adminpanel />
                <div className="d-flex flex-column container-fluid m-0 p-0">
                    <Header />
                    <MainContent />
                    
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
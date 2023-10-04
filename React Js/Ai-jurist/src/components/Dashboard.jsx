import React from 'react';
import SideNav from './common Layouts/SideNav';
import Header from './common Layouts/Header.jsx';

const Dashboard = () => {
    return (
        <>
            <SideNav />
            <div className="main-wrapper  ">
                <div className="container-fluid  ">
                    <div className="row py-2">
                        <p>Dashboard</p>

                    </div>
                </div>
            </div>


        </>
    );
};

export default Dashboard;
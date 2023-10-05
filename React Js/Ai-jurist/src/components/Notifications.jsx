import React from 'react';
import SideNav from './common Layouts/SideNav';

const Notifications = () => {
    return (
        <>
            <SideNav />
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">Notifications</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notifications;
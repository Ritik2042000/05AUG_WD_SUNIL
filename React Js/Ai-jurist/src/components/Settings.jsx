import React from 'react';
import SideNav from './common Layouts/SideNav';

const Settings = () => {
    return (
        <>
        <SideNav />
        <div className="main-wrapper">
            <div className="container">
                <div className="page-title">
                    <h1 className="page-heading mb-0">Settings</h1>
                </div>
            </div>
        </div>
    </>
    );
};

export default Settings;
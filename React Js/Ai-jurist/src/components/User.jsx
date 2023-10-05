import React from 'react';
import SideNav from './common Layouts/SideNav';

const User = () => {
    return (
        <>
            <SideNav />
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">User</h1>
                    </div>
                </div>
            </div>

        </>
    );
};

export default User;
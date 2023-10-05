import React from 'react';
import SideNav from './common Layouts/SideNav';

const Template = () => {
    return (
        <>
            <SideNav />
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">Template</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Template;
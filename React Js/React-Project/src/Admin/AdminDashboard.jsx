import React from 'react';
import Adminpanel from './Slidenav';
import {Chart} from './charts/charts';
const AdminDashboard = () => {
    return (
        <>
        <div className="container">
            <div className="row">
            <div className="col">
                {/* <Chart/> */}
            </div>

            </div>
        </div>
            <Adminpanel/>

        </>
    );
};

export default AdminDashboard;
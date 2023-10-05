import React from 'react';
import SideNav from './common Layouts/SideNav';

const NotificationBell = () => {
    return (
        <>
            <SideNav/>
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">Notification</h1>
                    </div>
                    <div className="card notification-card">
                        <div className="card-body notification-card-body">
                            <div className="card-content d-flex">
                                <div className="notification-user-icon">
                                    <i class="fas fa-user-circle fa-6x"></i>
                                </div>
                                <div className="ps-4">
                                    <div className="notification-block-heading d-flex justify-content-between">
                                        <h5>Amaira has accepted rent contract. 1 Minute Ago</h5>
                                        <div className="notification-block-date d-flex">
                                            <p>3rd Dec 2022 11:5221</p>
                                            <span>
                                                <i class="fas fa-trash-alt fa-lg ms-5"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <p>
                                        Pest vetum promissa memini cuius adeptione tupis: quem
                                        pollicitus est aversione aversi et fuga. Qui autem de re
                                        dest libido frustra miseri qui incurrit odium sul obiecti
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotificationBell;
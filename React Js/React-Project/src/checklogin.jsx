import React, { useEffect } from 'react';

import AdminDashboard from './Admin/AdminDashboard';
import { unstable_HistoryRouter } from 'react-router-dom';

const Checklogin = (AdminDashboard) => {
  const AuthRedirectComponent = () => {
    const history = unstable_HistoryRouter

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('loggedIn');
      const hasCookies = document.cookie;

      if (!isLoggedIn || !hasCookies) {
        history.push('/login');
      }
    }, [history]);

    return <AdminDashboard/>;
  };

  return AuthRedirectComponent;
};

export default Checklogin;

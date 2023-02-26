import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export const ProtectUser = () => {
    // Read the userType cookie
    // const userType = document.cookie.replace(/(?:(?:^|.*;\s*)userType\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const userType = Cookies.get('userType');

    // Allow access for both users and admins
    if (userType === 'user' || userType === 'admin') {
        return <Outlet />;
    }

    // Redirect to login for all other users
    return <Navigate to='/login' />;
};

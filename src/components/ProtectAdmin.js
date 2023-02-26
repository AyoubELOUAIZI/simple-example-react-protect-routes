import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export const ProtectAdmin = () => {
    // Read the userType cookie
    // const userType = document.cookie.replace(/(?:(?:^|.*;\s*)userType\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const userType = Cookies.get('userType');

    return (
        <div>Admin
            {userType !== 'admin' ? <Navigate to='/login' /> : <Outlet />}
        </div>
    );
};

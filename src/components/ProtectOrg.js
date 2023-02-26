import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';


export const ProtectOrg = () => {
    // Read the userType cookie
    const userType = Cookies.get('userType');

    return (
        <div>Organizer
            {userType !== 'org' && userType !== 'admin' ? <Navigate to='/login' /> : <Outlet />}
        </div>
    );
};

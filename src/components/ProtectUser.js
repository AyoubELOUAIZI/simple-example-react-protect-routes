import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const ProtectUser = () => {
    const [cookies] = useCookies(['userType']);
    const userType = cookies.userType;

    // Allow access for both users and admins
    if (userType === 'user' || userType === 'admin') {
        return <Outlet />;
    }

    // Redirect to login for all other users
    return <Navigate to='/login' />;
};

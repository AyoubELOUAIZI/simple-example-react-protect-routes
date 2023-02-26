import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const ProtectAdmin = () => {
    const [cookies] = useCookies(['userType']);

    return (
        <div>Admin
            {cookies.userType !== 'admin' ? <Navigate to='/login' /> : <Outlet />}
        </div>
    );
};

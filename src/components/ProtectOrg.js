import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const ProtectOrg = () => {
    const [cookies] = useCookies(['userType']);
    const userType = cookies.userType;

    return (
        <div>Organizer
            {userType !== 'org' && userType !== 'admin' ? <Navigate to='/login' /> : <Outlet />}
        </div>
    );
};

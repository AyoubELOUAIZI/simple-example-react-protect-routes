import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './AuthContext';

export const ProtectUser = () => {
    const { profile } = useContext(AuthContext);

    // Allow access for both users and admins
    if ((profile && profile.account) && (profile.account.account_type === "client" || profile.account.account_type === 'admin')) {
        return <Outlet />;
    }
   

    // Redirect to login for all other users
    return <Navigate to='/login' />;
};

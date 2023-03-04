import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './AuthContext';

export const ProtectUser = () => {
    const { profile } = useContext(AuthContext);
    return (
        <div>Admin
            {/* // Allow access for both users and admins */}
            {profile && profile.account && (profile.account.account_type === "client" || profile.account.account_type === 'admin') ?
                <Outlet /> : <Navigate to='/login' replace />}
        </div>)
};

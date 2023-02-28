import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './AuthContext';

export const ProtectAuth = () => {

    const { profile } = useContext(AuthContext);

    return (
        <div>
            {/* protect login and regester from the login users */}
            {!profile  ? <Outlet /> : <Navigate to='/' />}
        </div>
    );
};

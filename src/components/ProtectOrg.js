import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


export const ProtectOrg = () => {
    let isorgLoged = localStorage.getItem('orgLoged');
    let isadminLoged = localStorage.getItem('adminLoged');

    // console.log(isAutentecated)
    return (
        <div>Organizer
            {isorgLoged !== 'true' && isadminLoged !== 'true' ? <Navigate to='/login' /> : <Outlet />}
        </div>
    )
}

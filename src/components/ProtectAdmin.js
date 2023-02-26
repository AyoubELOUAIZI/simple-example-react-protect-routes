import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


export const ProtectAdmin = () => {
    let isadminLoged = localStorage.getItem('adminLoged');
    // console.log(isAutentecated)
    return (
        <div>admin
            {isadminLoged !== 'true' ? <Navigate to='/login' /> : <Outlet />}
        </div>
    )
}



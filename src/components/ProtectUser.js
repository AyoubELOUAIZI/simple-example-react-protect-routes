import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


export const ProtectUser = () => {
    let isuserLoged = localStorage.getItem('userLoged');
    let isadminLoged = localStorage.getItem('adminLoged');

    // console.log(isAutentecated)
    return (
        <div>User
            {isuserLoged !== 'true' && isadminLoged !== 'true' ? <Navigate to='/login' /> : <Outlet />}
        </div>
    )
}

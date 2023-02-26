import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


export const ProtectedRoutes = () => {
    let isAutentecated=localStorage.getItem('isLogged');
    // console.log(isAutentecated)
  return (
    <div>ProtectedRoutes
          {isAutentecated !== 'true' ? <Navigate to='/login'/>: <Outlet />}
    </div>
  )
}

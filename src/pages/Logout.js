import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export const Logout = () => {

  const  navigate=useNavigate();
    useEffect(() => {
        console.log('heloooooo');
        localStorage.removeItem("adminLoged");
        localStorage.removeItem("orgLoged");
        localStorage.removeItem("userLoged");
        navigate('/');

    });
  return (
    <div>Logout
        {}
    </div>
  )
}

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';



export const Logout = () => {
    const navigate = useNavigate();


    useEffect(() => {
        Cookies.remove('userType');
        navigate('/');
    });

    return (
        <div>Logout</div>
    );
};

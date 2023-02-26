import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const Logout = () => {
    const navigate = useNavigate();
    const [, removeCookie] = useCookies(['userType']);

    useEffect(() => {
        removeCookie('userType');
        navigate('/');
    });

    return (
        <div>Logout</div>
    );
};

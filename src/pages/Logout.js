import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext';

export const Logout = () => {
    const navigate = useNavigate();

    const { profile,logout } = useContext(AuthContext);
    useEffect(() => {
        if(profile){
        logout();
        console.log("---------logout-----------")
        console.log(profile)
        
    }
        navigate('/');
    });

    return (
        <div>Logout</div>
    );
};

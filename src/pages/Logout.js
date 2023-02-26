import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('heloooooo');
    document.cookie = 'userType=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/');
  });

  return (
    <div>Logout</div>
  );
};

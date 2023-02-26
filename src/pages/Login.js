import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  function handleLogin(type) {
    // Set a cookie with the user type
    document.cookie = `userType=${type}; path=/`;
    navigate("/");
  }

  return (
    <div>Login
      <button onClick={() => handleLogin("admin")}>Login as admin</button>
      <button onClick={() => handleLogin("org")}>Login as organizer</button>
      <button onClick={() => handleLogin("user")}>Login as user</button>
    </div>
  )
}

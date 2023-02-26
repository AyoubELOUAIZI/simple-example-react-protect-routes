import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();


  function handelloginAdmin() {
    localStorage.setItem("adminLoged", true);

    // Remove the other two keys if adminLoged is true
    if (localStorage.getItem("adminLoged")) {
      localStorage.removeItem("orgLoged");
      localStorage.removeItem("userLoged");
    }

    navigate("/");
  }

  function handelloginOrg() {
    localStorage.setItem("orgLoged", true);

    // Remove the other two keys if orgLoged is true
    if (localStorage.getItem("orgLoged")) {
      localStorage.removeItem("adminLoged");
      localStorage.removeItem("userLoged");
    }

    navigate("/");
  }

  function handelloginUser() {
    localStorage.setItem("userLoged", true);

    // Remove the other two keys if userLoged is true
    if (localStorage.getItem("userLoged")) {
      localStorage.removeItem("adminLoged");
      localStorage.removeItem("orgLoged");
    }

    navigate("/");
  }



  return (
    <div>Login
      <button onClick={()=>handelloginAdmin()}>login as admin</button>
      <button onClick={()=>handelloginOrg()}>login as organizer</button>
      <button onClick={()=>handelloginUser()}>login as user</button>
    </div>

  )
}

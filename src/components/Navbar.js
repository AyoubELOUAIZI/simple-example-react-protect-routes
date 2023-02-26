import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
  return (
      <nav className='navbar'>
         <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/login">Login</Link>
          </li>
          <li>
              <Link to="/orgdash">OrganizerDashbord</Link>
          </li>
          <li>
              <Link to="/orgevent">OrganizerEvents</Link>
          </li>
          <li>
              <Link to="/register">Register</Link>
          </li>
          <li>
              <Link to="/card">UserCards</Link>
          </li>
          <li>
              <Link to="/tickt">UserTickets</Link>
          </li>
          <li>
              <Link to="/admin">admin</Link>
          </li>
          <li>
              <Link to="/logout">Logout</Link>
          </li>
      </ul>
      </nav>


  )
}

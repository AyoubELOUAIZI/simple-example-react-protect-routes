import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { ProtectAdmin } from './components/ProtectAdmin';
import { ProtectOrg } from './components/ProtectOrg';
import { ProtectUser } from './components/ProtectUser';
import { AdminDashbord } from './pages/AdminDashbord';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Logout } from './pages/Logout';
import { OrganizerDashbord } from './pages/OrganizerDashbord';
import { OrganizerEvents } from './pages/OrganizerEvents';
import { Register } from './pages/Register';
import { UserCards } from './pages/UserCards';
import { UserTickets } from './pages/UserTickets';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectOrg />}>
              <Route path="/orgdash" element={<OrganizerDashbord />} />
              <Route path="/orgevent" element={<OrganizerEvents />} />
            </Route>

            <Route element={<ProtectUser />}>
              <Route path="/card" element={<UserCards />} />
              <Route path="/tickt" element={<UserTickets />} />
            </Route>

            <Route element={<ProtectAdmin />}>
              <Route path="/admin" element={<AdminDashbord />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './components/Login';
import NavbarComponent from './components/Navbar.jsx';
import { UserProvider } from './UserContext.jsx';
import { Toaster } from 'react-hot-toast';
import ProfileUser from './pages/ProfileUser.jsx';
export default function App() {
  return (
    <UserProvider>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userprofile" element={<ProfileUser />} />
        </Routes>
        <Toaster />
      </div>
    </UserProvider>
  );
}

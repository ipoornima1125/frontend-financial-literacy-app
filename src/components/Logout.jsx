import React from 'react';
import { useUser } from '../UserContext.jsx';
import {toast} from 'react-hot-toast'

import {useNavigate} from 'react-router-dom';
function Logout() {
  const { setUser } = useUser();
  const navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser({ isLoggedIn: false, email: '' });
    toast.success("Logged out successfully")
    navigate("/");
  };

  return (
    <button className="btn" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;



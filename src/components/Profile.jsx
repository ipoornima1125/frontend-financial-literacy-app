import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext.jsx';
import { baseUrl } from '../url.js';
import {useNavigate} from 'react-router-dom';
const Profile = () => {
  const navigate=useNavigate();
  const goToProfilePage=()=>{
    const modal = document.getElementById("profile_modal");
    if (modal) {
      modal.close();
    }
    console.log("Navigating to /userprofile"); // Debug log
    navigate("/userprofile");
  }
  const { user, getToken } = useUser();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = getToken();
        console.log('Token from getToken:', token); // Debug log
        const response = await axios.get(`${baseUrl}/profile/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    if (user && user.isLoggedIn) {
      console.log('User is logged in:', user); // Debug log
      fetchUserData();
    }
  }, [user, getToken]);

  if (!user || !user.isLoggedIn) return null;

  const firstLetter = user.email.charAt(0).toUpperCase();

  return (
    <>
      <a className="avatar online placeholder hover:cursor-pointer" onClick={() => document.getElementById("profile_modal").showModal()}>
        <div className="bg-black text-white w-12 rounded-full">
          <span className="text-xs">{firstLetter}</span>
        </div>
      </a>
      <dialog id="profile_modal" className="modal" font-playwriteNGModern >
        <div className="modal-box space-y-2">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="user-info">
            <p>Email: {userData.email}</p>
   
          </div>
          <button className="btn btn-outline btn-info" onClick={goToProfilePage}>Go to my Profile</button>
        </div>
      </dialog>
    </>
  );
};

export default Profile;

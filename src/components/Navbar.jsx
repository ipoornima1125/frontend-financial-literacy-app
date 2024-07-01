import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import { useUser } from '../UserContext.jsx'; // Import the custom hook
import Profile from '../components/Profile.jsx';
import Logout from './Logout.jsx';
import Login from './Login';
function Navbar() {
  const { user } = useUser();
    const [sticky,setSticky]=useState(false);
    useEffect(
      ()=>{
         const handleScroll=()=>{
           if(window.scrollY>0){
            setSticky(true);
           }
           else{
            setSticky(false);
           }
         }
         window.addEventListener('scroll',handleScroll)
         return ()=>{
          window.removeEventListener('scroll',handleScroll)
         }
      },[]
    )
    const navItems=(
    <>
        <li><a href="/">Home</a></li>
      <li><a href="/courses">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
    );
  return (
    <>
    <div className={`max-w-screen-2xl font-playwriteNGModern text-black bg-orange-200 container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky?"sticky-navbar shadow-md font-playwriteNGModern bg-white text-black duration-300 transition-all ease-in-out" :""}`}>
    <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <a className=" text-2xl font-bold cursor-pointer">PennyPath</a>
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>

  <div>
<div className='hidden sm:block'>
  <label className="bg-white px-3 py-2 border rounded-md flex items-center gap-2">
  <input type="text" className="grow outline-none bg-white" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
</div>
  </div>

  <div className="px-2 py-2">
  <label className="swap swap-rotate">
  
  <input type="checkbox" className="theme-controller" value="synthwave" />
  
 
  
</label>
  </div>

  <div className="">
      {user.isLoggedIn ? (
        <>
        <div className=" flex flex-row space-x-2 ">
        <Logout/>
        <Profile />
        </div>
        </>
      ) : (
        <a
          className="bg-black text-white px-2 py-2 rounded-md cursor-pointer"
          onClick={() => document.getElementById("loginModal").showModal()}
        >
          Login
        </a>
      )}
      <Login />
    </div>

</div>
</div>
    </div>
    </>
  )
}

export default Navbar;
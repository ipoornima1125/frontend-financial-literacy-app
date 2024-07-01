import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Interest from '../components/Interest.jsx';
import { useUser } from '../UserContext.jsx';
import { toast, Toaster } from 'react-hot-toast';

function ProfileUser() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    if (!user || !user.isLoggedIn) {
      toast.error("Please login to show user profile");
      navigate("/login");
    }
  }, [user, navigate]);

  const handleCourseSelect = (course) => {
    setSelectedCourses((prevCourses) => [...prevCourses, course]);
  };

  if (!user || !user.isLoggedIn) return null;

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Interest onCourseSelect={handleCourseSelect} />
        <div className="mt-8 p-4 w-full max-w-screen-lg">
          <h2 className="text-xl font-bold">Selected Courses:</h2>
          <ul>
            {selectedCourses.map((course, index) => (
              <li key={index} className="mt-2 p-2 border rounded">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p>{course.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProfileUser;

import React from 'react';

function Interest({ onCourseSelect }) {
  const courses = [
    {
      title: 'Budgeting Basics',
      description: 'Learn the fundamentals of creating and managing a budget to help you take control of your finances.'
    },
    {
      title: 'Investing 101',
      description: 'An introductory course on the basics of investing, including different types of investments and strategies.'
    },
    {
      title: 'Credit Management',
      description: 'Understand how to manage credit effectively, including tips on maintaining a good credit score and handling debt.'
    }
  ];

  return (
    <>
      <div className="mt-32">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">Courses Interested In</div>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact  bg-black text-primary-content z-[1] w-64 p-2 shadow"
          >
            {courses.map((course, index) => (
              <div key={index} className="card-body mt-2">
                <button onClick={() => onCourseSelect(course)}>
                  <h3 className="card-title text-orange-300">{course.title}</h3>
                  <p>{course.description}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Interest;

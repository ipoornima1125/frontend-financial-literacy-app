import React from 'react';

import Footer from '../components/Footer';

function About(){
    return(
        <>
         
          <div className="min-h-screen  flex flex-col items-center py-10 ">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-12 mb-12">
        <h1 className="text-4xl font-bold text-orange-600 mb-6 font-playwriteNGModern">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our website! We are dedicated to providing the best service possible.
          Our team of experts is here to help you with any questions you may have.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to deliver high-quality products and services that meet the needs of our customers.
          We strive for excellence in everything we do and are committed to continuous improvement.
        </p>
        <p className="text-gray-600 mb-4">
          We value our customers and believe in building long-term relationships based on trust and mutual respect.
          Thank you for choosing our company. We look forward to serving you.
        </p>
        <h2 className="text-2xl font-semibold text-orange-600 mt-6 mb-2 font-playwriteNGModern">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-200 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-white-900 font-playwriteNGModern">Poornima</h3>
            <p className="text-white-500 font-playwriteNGModern">CEO & Founder</p>
            <p className="text-white-600 mt-2">
              Poornima is the visionary behind our company. With over 20 years of experience in the industry,
              she leads our team with passion and dedication.
            </p>
          </div>
          <div className="bg-orange-200 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-white-900 font-playwriteNGModern">Himani</h3>
            <p className="text-white-500 font-playwriteNGModern">Chief Operating Officer</p>
            <p className="text-white-600 mt-2">
              Himani is responsible for overseeing our operations. Her expertise in management ensures
              that our company runs smoothly and efficiently.
            </p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
          <div className="bg-orange-300">
          <Footer/>
          </div>
        </>
    )
}

export default About;
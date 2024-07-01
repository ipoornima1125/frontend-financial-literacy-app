import React from "react";
import Lottie from 'lottie-react';
import image from '../assets/Animation - 1719317898438.json';
import arrow from '../assets/arrow.json';
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row bg-orange-50">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold text-black font-playwriteNGModern">
              Hello,welcome here to learn something{" "}
              <span className="text-orange-400">new everyday!!!</span>
            </h1>
            <p className="text-2xl  text-amber-600 ">
             We believe that financial literacy is the key to a secure and prosperous future. Our mission is to provide the resources you need to make informed financial decisions, no matter where you are on your financial journey.
            </p>
            
         <Lottie style={{
           width:400,
           height:400,
         }}loop={true} animationData={arrow}></Lottie>
         </div>
  
        </div>
        
       

        <div className="order-1 md:order-2 w-full md:w-1/2">
          <div className="px-10 mt-12 md:mt-32">
          <Lottie loop={true} animationData={image}></Lottie>
        </div>

        </div>
      </div>
    </>
  );
}

export default Banner;

// space-y-12 adds margin top of 3rem to each child element

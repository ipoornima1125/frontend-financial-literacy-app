import React from 'react'
import Card from './Cards';
import axios from "axios";
import {Link} from "react-router-dom";
import {useEffect,useState} from 'react';
import {baseUrl} from '../url';
function Course() {
  const [data,setData]=useState([]);
  useEffect(()=>{
       const fetchData= async()=>{
             try{
                const res= await axios.get(`${baseUrl}/course/`);
                console.log(res.data);
                setData(res.data);
             }
             catch(error){
               console.log(error);
             }
       } 
       fetchData();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-orange-50  ">
           <div className="mt-32 items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl font-playwriteNGModern ">We are delighted to have you <span className="text-orange-400">here !</span></h1>
            <p className="mt-12 text-2xl">
            Join us on this journey towards financial independence and confidence. Enroll in a course today and start building your financial future!
            </p>
            <Link to="/">
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 mt-12 rounded-md hover:bg-orange-700 duration-300">Back</button>
            </Link>
           </div>

           <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
             {
              data.map((item)=>(
                <Card item={item} key={item.id}/>
              ))
             }
           </div>
      </div>
    </>
  )
}

export default Course;
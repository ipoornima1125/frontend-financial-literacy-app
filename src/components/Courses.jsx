import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import  { useState, useEffect } from 'react';
import axios from "axios";
import {baseUrl} from '../url';
function Courses() {
  
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const res = await axios.get(`${baseUrl}/course/`)
        console.log(res.data)
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[])
  

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-5 bg-orange-200">
        <div>
        <h1 className="font-bold font-playwriteNGModern text-3xl pt-4 pb-4 text-black">Our Popular Courses</h1>
        </div>
    <div className="bg-white text-black"> 
    <Slider {...settings} className="bg-white">
        {data.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Courses;
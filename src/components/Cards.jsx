import React from 'react'
import { Link } from 'react-router-dom';

import {useState} from "react";
import Quiz from "./Quiz";
function Cards({item}) {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleTakeQuizClick = () => {
   setShowQuiz(true);
  };
  return (
   <>
     <div className="flex flex-col md:flex-row p-3 hover:scale-105 duration-200 ">
     <div className="card w-93 shadow-xl hover: cursor-pointer">
  <figure><img src={item.image} alt={item.title} /></figure>
  <div className="card-body ">
    <h2 className="card-title font-playwriteNGModern">
     {item.name}
  
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
    
  
      <button
        className="bg-orange-300 font-playwriteNGModern text-black px-4 py-2 mt-12 rounded-md hover:bg-orange-400 duration-300"
        onClick={handleTakeQuizClick}
      >
        Take a Quiz
      </button>
      {showQuiz && <Quiz quizQuestions={item.quizQuestions} />}
    

      <Link to={item.link}>
  <button className="bg-orange-300 font-playwriteNGModern text-black px-4 py-2 mt-12 rounded-md hover:bg-orange-400 duration-300">Read More</button>
</Link>
    </div>
  </div>
</div>

     </div>
   </>
  )
}

export default Cards;
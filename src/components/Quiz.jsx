import React, { useState, useEffect } from 'react';
import {toast,Toaster} from 'react-hot-toast';
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const questions = [
    {
      questionText: 'What is the first step in creating a budget?',
      answerOptions: [
        { answerText: 'Start spending less', isCorrect: false },
        { answerText: 'Track your income and expenses', isCorrect: true },
        { answerText: 'Set financial goals', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of these is NOT considered a fixed expense?',
      answerOptions: [
        { answerText: 'Rent/Mortgage', isCorrect:false },
        { answerText: 'Groceries', isCorrect: false },
        { answerText: 'Entertainment', isCorrect: true },
      ],
    },

    {
        questionText: 'What is the ideal percentage of your income to save?',
        answerOptions: [
          { answerText: '10%', isCorrect:false },
          { answerText: '20%', isCorrect: true },
          { answerText: 'There is no ideal percentage', isCorrect: false },
        ],
      },
  
  ];

  useEffect(() => {
    const quizModal = document.getElementById("quiz_modal");
    if (quizModal) {
      quizModal.showModal();
    }
  }, []);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
    <Toaster/>
      toast.success("Correct!")
      setScore(score + 1);
    }
    else{
        <Toaster/>
       toast.error("Oops! Wrong answer")
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizCompleted(true);
    }
  };

  return (
    <>
     
      <dialog id="quiz_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {!isQuizCompleted ? (
            <>
              <h3 className="font-bold text-lg">{questions[currentQuestion].questionText}</h3>
              <div className="py-4">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    className="btn btn-primary my-2 w-full"
                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <h3 className="font-bold text-lg">Quiz Completed!</h3>
              <p className="py-4 font-bold text-xl">Your score is: {score}/{questions.length}</p>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}

export default Quiz;

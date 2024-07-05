import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function Quiz({ quizQuestions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    const quizModal = document.getElementById("quiz_modal");
    if (quizModal) {
      quizModal.showModal();
    }
  }, []);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      toast.success("Correct!");
      setScore(score + 1);
    } else {
      toast.error("Oops! Wrong answer");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
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
              <h3 className="font-bold text-lg">{quizQuestions[currentQuestion].questionText}</h3>
              <div className="py-4">
                {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
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
              <p className="py-4 font-bold text-xl">Your score is: {score}/{quizQuestions.length}</p>
              {score === quizQuestions.length && (
                toast.success("Congratulations! You answered all of them correctly")
              )}
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}

export default Quiz;

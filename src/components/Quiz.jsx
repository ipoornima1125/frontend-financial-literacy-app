import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Quiz({ quizQuestions, onClose }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const quizModal = document.getElementById("quiz_modal");
    if (quizModal) {
      quizModal.showModal();
    }
  }, []);

  const handleAnswerButtonClick = (isCorrect, questionText) => {
    if (isCorrect) {
      toast.success("Correct!");
      setScore(score + 1);
    } else {
      toast.error("Oops! Wrong answer");
      setWrongAnswers(prev => [...prev, questionText]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleFeedbackClick = () => {
    navigate("/feedback", { state: { wrongAnswers } });
  };

  const handleModalClose = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowModal(false);
    onClose();
  };

  return (
    <>
      <dialog id="quiz_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleModalClose}>✕</button>
          </form>

          {!isQuizCompleted ? (
            <>
              <h3 className="font-bold text-lg">{quizQuestions[currentQuestion].questionText}</h3>
              <div className="py-4">
                {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    className="btn btn-primary my-2 w-full"
                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect, quizQuestions[currentQuestion].questionText)}
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
              <button className="btn btn-info" onClick={handleFeedbackClick}>Feedback</button>
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

import React, { useState } from 'react';

function BudgetQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the first step in creating a budget?",
      answers: [
        "Start spending less",
        "Track your income and expenses",
        "Set financial goals",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which of these is NOT considered a fixed expense?",
      answers: ["Rent/Mortgage", "Groceries", "Entertainment"],
      correctAnswer: 2,
    },
    {
      question: "What is the ideal percentage of your income to save?",
      answers: ["10%", "20%", "There's no ideal percentage"],
      correctAnswer: 1,
    },
  ];

  const handleAnswerClick = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const displayResult = () => {
    return (
      <div>
        <h2>You finished the quiz!</h2>
        <p>Your score is: {score} out of {questions.length}</p>
      </div>
    );
  };

  const displayQuestion = () => {
    const currentQuestionData = questions[currentQuestion];
    return (
      <div>
        <h3>Question {currentQuestion + 1}</h3>
        <p>{currentQuestionData.question}</p>
        <ul>
          {currentQuestionData.answers.map((answer, index) => (
            <li key={index}>
              <button onClick={() => handleAnswerClick(index)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Budget Basics Quiz</h1>
      {showResult ? displayResult() : displayQuestion()}
    </div>
  );
}

export default BudgetQuiz;

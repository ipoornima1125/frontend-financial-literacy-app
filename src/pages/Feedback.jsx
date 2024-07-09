import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { baseUrl } from '../url'; 
import ReactMarkdown from 'react-markdown';
function Feedback() {
  const navigate = useNavigate();
  const location = useLocation();
  const { wrongAnswers } = location.state || [];
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (wrongAnswers.length > 0) {
      fetch(`${baseUrl}/gemini/send-to-gemini`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questions: wrongAnswers }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Gemini Responses:', data);
          setResponses(data.responses || []);
        })
        .catch(error => {
          console.error('Error sending request to Gemini:', error);
          toast.error('Error communicating with Gemini');
        });
    }
  }, [wrongAnswers]);

  return (
    <>
      <div className="space-y-12 flex flex-col items-center justify-center min-h-screen mt-32">
        <div className="p-4 w-full max-w-screen-lg">
          <h2 className="text-xl font-bold">Feedback on Wrong Answers:</h2>
          <ul>
            {responses.map((response, index) => (
              <li key={index} className="mt-2 p-2 border rounded">
                <h3 className="text-lg font-semibold">Question: {response.question}</h3>
                <p>
                <ReactMarkdown>
                {response.text}
                </ReactMarkdown>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <button className="btn btn-outline btn-warning" onClick={() => navigate("/")}>
          Back
        </button>
        <Footer />
      </div>
    </>
  );
}

export default Feedback;

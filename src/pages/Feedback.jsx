import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { baseUrl } from '../url'; 
import ReactMarkdown from 'react-markdown';
import feedback from '../assets/feedback.json';
import Lottie from 'lottie-react';
function Feedback() {
  const navigate = useNavigate();
  const location = useLocation();
  const { wrongAnswers } = location.state || [];
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (wrongAnswers.length > 0) {
      fetch(`${baseUrl}/openai/send-to-openai`, {
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
      <div className="space-y-12 flex flex-col items-center justify-center min-h-screen mt-32 ">
      <Lottie style={{
           width:200,
           height:200,
         }}loop={true} animationData={feedback}></Lottie>

        <div className="p-4 w-full max-w-screen-lg bg-slate-200">
          <h2 className="text-3xl font-bold font-playwriteNGModern text-orange-950">Here's What you need to know:</h2>
          <ul>
            {responses.map((response, index) => (
              <li key={index} className="mt-2 p-2 border rounded  text-black font-sans text-xl">
                <h3 className="text-2xl font-semibold mb-3 ">Question: {response.question}</h3>
                <p >
                <ReactMarkdown className="text-xl">
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

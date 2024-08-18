import React, { useState } from 'react';

const DecisionPanel = ({ decisions, onDecision }) => {
  const [feedback, setFeedback] = useState(null);

  const handleDecision = (impact) => {
    setFeedback(impact > 0 ? 'bad' : 'good');
    setTimeout(() => setFeedback(null), 1000);
    onDecision(impact);
  };

  return (
    <div className="flex flex-col space-y-4">
      {decisions.map((decision, index) => (
        <button 
          key={index} 
          onClick={() => handleDecision(decision.impact)}
          className={`px-4 py-2 rounded-lg transition ${
            feedback === 'good' ? 'bg-green-500' : feedback === 'bad' ? 'bg-red-500' : 'bg-green-600'
          } text-white hover:bg-green-500`}
        >
          {decision.text}
        </button>
      ))}
      {feedback && (
        <div
          className={`mt-4 text-lg font-bold ${
            feedback === 'good' ? 'text-green-700' : 'text-red-700'
          }`}
        >
          {feedback === 'good' ? 'Good Decision!' : 'Bad Decision!'}
        </div>
      )}
    </div>
  );
};

export default DecisionPanel;


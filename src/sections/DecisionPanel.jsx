import React from 'react';

const DecisionPanel = ({ decisions, onDecision }) => {
  return (
    <div className="flex flex-col space-y-4">
      {decisions.map((decision, index) => (
        <button 
          key={index} 
          onClick={() => onDecision(decision.impact)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
        >
          {decision.text}
        </button>
      ))}
    </div>
  );
};

export default DecisionPanel;

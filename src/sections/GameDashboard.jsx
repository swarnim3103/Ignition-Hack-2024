import React from 'react';
import DecisionPanel from './DecisionPanel';

const GameDashboard = ({ levelData, onDecision }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Level {levelData.level}: {levelData.scenario}
      </h2>
      <DecisionPanel decisions={levelData.decisions} onDecision={onDecision} />
    </div>
  );
};

export default GameDashboard;

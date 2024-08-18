import React from 'react';

const ScoreTracker = ({ wasteLevel }) => {
  return (
    <div className="mb-6 p-4 bg-blue-100 rounded-lg w-full max-w-md">
      <h3 className="text-xl font-medium text-blue-700 mb-2">
        Waste Level: {wasteLevel}
      </h3>
      <div className="w-full bg-gray-300 rounded-full h-6">
        <div
          className={`bg-green-500 h-6 rounded-full transition-width duration-300`}
          style={{ width: `${50 - wasteLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreTracker;


import React from 'react';

const ScoreTracker = ({ wasteLevel }) => {
  return (
    <div className="mb-6 p-4 bg-blue-100 rounded-lg">
      <h3 className="text-xl font-medium text-blue-700">
        Waste Level: {wasteLevel}
      </h3>
    </div>
  );
};

export default ScoreTracker;

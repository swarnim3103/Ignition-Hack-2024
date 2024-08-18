import React, { useState } from 'react';
import { gameData } from './GameData';
import GameDashboard from '../sections/GameDashboard';
import ScoreTracker from '../sections/ScoreTracker';

function Game() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [wasteLevel, setWasteLevel] = useState(0);

  const handleDecision = (impact) => {
    setWasteLevel(wasteLevel + impact);
    if (currentLevel < gameData.length - 1) {
      setCurrentLevel(currentLevel + 1);
    } else {
      alert(`Game Over! Your final waste level is: ${wasteLevel}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Waste Zero Game</h1>
      <ScoreTracker wasteLevel={wasteLevel} />
      <GameDashboard 
        levelData={gameData[currentLevel]} 
        onDecision={handleDecision} 
      />
    </div>
  );
}

export default Game;
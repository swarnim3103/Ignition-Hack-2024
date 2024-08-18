import React, { useState } from 'react';
import { gameData } from './GameData';
import GameDashboard from '../sections/GameDashboard';
import ScoreTracker from '../sections/ScoreTracker';
import Nav from '../sections/Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Game() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [wasteLevel, setWasteLevel] = useState(0);
  const [fade, setFade] = useState(false);

  const handleDecision = (impact) => {
    setFade(true);
    setTimeout(() => {
      setWasteLevel(wasteLevel + impact);
      setFade(false);
      if (currentLevel < gameData.length - 1) {
        setCurrentLevel(currentLevel + 1);
      } else {
        alert(`Game Over! Your final waste level is: ${wasteLevel}`);
      }
    }, 500);
  };

  return (
    <>
    <Nav/>
    <div className="flex flex-col h-screen items-center bg-gradient-to-b from-white to-green-500">
      <h1 className="text-4xl font-bold text-green-700 mb-20">Waste Zero Game</h1>
      <ScoreTracker wasteLevel={wasteLevel} />
      <div className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
        <GameDashboard 
          levelData={gameData[currentLevel]} 
          onDecision={handleDecision} 
        />
      </div>
      <button className="bg-green-50 text-black px-8 py-4 rounded items-center justify-center m-auto text-2xl"><Link to="/dashboard">Exit Game</Link></button>
      <Footer/>
    </div>
    </>
  );
}

export default Game;
import React, { useState } from 'react';

const Game = () => {
  const [funds, setFunds] = useState(100);
  const [waste, setWaste] = useState(0);
  const [resources, setResources] = useState(100);

  const produceGoods = () => {
    const productionCost = 10;
    const wasteProduced = 2;
    const revenue = 20;

    if (resources >= productionCost) {
      setResources(resources - productionCost);
      setWaste(waste + wasteProduced);
      setFunds(funds + revenue);
    } else {
      alert("Not enough resources to produce goods.");
    }
  };

  const recycleWaste = () => {
    const recyclingCost = 5;

    if (funds >= recyclingCost && waste > 0) {
      setWaste(waste - 1);
      setFunds(funds - recyclingCost);
    } else {
      alert("Not enough funds or no waste to recycle.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-green-700">Zero Waste Business Game</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="mb-4">
          <p className="text-lg"><strong>Funds:</strong> ${funds}</p>
          <p className="text-lg"><strong>Resources:</strong> {resources}</p>
          <p className="text-lg"><strong>Waste:</strong> {waste} units</p>
        </div>
        <div className="flex justify-around">
          <button
            onClick={produceGoods}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Produce Goods
          </button>
          <button
            onClick={recycleWaste}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Recycle Waste
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
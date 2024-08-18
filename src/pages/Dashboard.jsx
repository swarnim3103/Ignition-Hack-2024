import React from 'react';
import Nav from '../sections/Nav.jsx';
import Footer from '../sections/Footer.jsx';
import Game from '../sections/game.jsx';
import Typewriter from '../sections/Typewriter.jsx';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const scrollToSection = () => {
    const section = document.getElementById('scroll-target');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Nav />
      <div className="items-center bg-gray-100 mb-4">
        <div className="bg-white shadow-md w-full h-screen pt-40">
          <h2 className="text-8xl font-bold text-center text-green-500">
            Welcome To <Typewriter text="Zero Waste Business Game" />
          </h2>
          <p className="text-center text-2xl font-bold text-green-600">Scroll Down</p>
          <img
            src="src/assets/icons/down-arrow-multimedia-option-svgrepo-com.svg"
            alt="Scroll Down"
            className="w-12 h-12 mx-auto cursor-pointer"
            onClick={scrollToSection}
          />
        </div>
      </div>
      <div id="scroll-target" className="flex w-[90%] gap-4 mx-auto justify-between pb-20">
        <div className="text-4xl text-center ml-60">
          <img src="src/assets/icons/light-bulb-svgrepo-com.svg" alt="Visual Elements" className="" />
          <h1>Score</h1>
        </div>
        <div className="border-r-2 border-gray-300"></div> {/* Vertical line */}
        <div className="text-4xl text-center mr-60">
          <img src="src/assets/icons/clock-svgrepo-com.svg" alt="Visual Elements" className="" />
          <h1>Rank</h1>
        </div>
      </div>
      <button className="bg-green-800 text-white px-4 py-2 rounded items-center justify-center m-auto"><Link to="/game">Let's Play</Link></button>
      <Footer />
    </>
  );
};

export default Dashboard;
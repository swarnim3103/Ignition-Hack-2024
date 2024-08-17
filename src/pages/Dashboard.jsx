import React from 'react';
import Nav from '../sections/Nav.jsx';
import Footer from '../sections/Footer.jsx';

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="flex items-center bg-gray-100 mb-4">
        <div className="bg-white p-8 shadow-md w-full">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-500">
            Welcome To <span className="text-green-900 underline">WasteZero</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col w-[90%] gap-4 mx-auto">
        {/* Add content here */}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
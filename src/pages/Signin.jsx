import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <div id="google-signin-button" className="mb-6"></div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Enter Your Credantials</h2>
          <p className="mt-4 text-gray-400 mb-4">If new here get started  <Link to="/signup" className='underline'>with new account</Link></p>
          <form>
            <input type="email" placeholder="Email" className="w-full border border-gray-200 p-2 rounded mb-4" />
            <input type="password" placeholder="Password" className="w-full border border-gray-200 p-2 rounded mb-4" />
          </form>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">Login</button>
          <p className="mt-4 text-gray-400">Back to <Link to="/" className='underline'>Dashboard</Link></p>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 ml-20">
        <img src="src\assets\icons\login-svgrepo-com.svg" alt="Visual Elements" className="" />
      </div>
    </div>
  </div>
  );
};

export default Signin;

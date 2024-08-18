import { Nav } from "../sections/index.js";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-500">
    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center bg-green-50 shadow-lg rounded-lg p-20 ">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">Get Started</h1>
        <div id="google-signin-button" className="mb-6"></div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Enter Your Credantials</h2>
          <p className="mt-4 text-gray-400 mb-4">If you already have an account login <Link to="/signin" className='underline'>here</Link></p>
          <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="uname" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="psw" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
            />
          </div>
          </form>
          <button className="bg-gray-800 text-white px-4 py-2 rounded"><Link to="/dashboard">Create Account</Link></button>
          <p className="mt-4 text-gray-400">Back to <Link to="/" className='underline'>Dashboard</Link></p>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 ml-20 ">
        <img src="src\assets\icons\personal-svgrepo-com.svg" alt="Visual Elements" className="" />
      </div>
    </div>
  </div>
    </>
  );
};

export default Signup;
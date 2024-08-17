import { Nav } from "../sections/index.js";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <form className="bg-gradient-to-b from-blue-100 to-blue-600 flex items-center justify-center min-h-screen p-6 rounded-lg shadow-md w-full">
        <div>
          <header className="text-2xl font-bold mb-4">Sign Up</header>
          <p className="mb-4 text-black">
            If you already have an account sign in{" "}
            <span className="underline text-[#0000EE]">
              <Link to="/Signin">here</Link>
            </span>
            .
          </p>
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
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-black focus:outline-none"
            >
              <Link to="/dashboard">Create Account</Link>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
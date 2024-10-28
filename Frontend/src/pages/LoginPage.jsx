// pages/LoginPage.jsx
import React from "react";
import { Youtube } from "lucide-react"; // Add this import
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-6">
          <Youtube className="h-8 w-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Sign in</h1>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
        <div className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-700">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

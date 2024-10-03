// src/Login.js
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Login
        </h2>
        <p className="text-center text-gray-600 mb-4">
          To logon as admin use{" "}
          <span className="font-semibold">admin@test.com/admin</span>, to login
          as a client create an account
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2 leading-tight" />
            <label className="text-sm text-gray-600">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="text-center mt-2">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

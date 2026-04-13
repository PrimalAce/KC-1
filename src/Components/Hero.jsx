import React, { useState } from 'react';
import Himg from '../assets/hero.png';

const Hero = ({ onSkipToReg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-100 py-16 rounded-lg mt-10">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2">
          <img
            src={Himg}
            alt="KaraCredit"
            className="w-150 h-auto rounded-lg shadow-lg "
          />
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to KaraCredit where Funds are Secured
          </h1>
          <p className="text-lg text-gray-600">
            Your trusted partner for secure financial solutions.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Get Started
          </button>

          <button 
            onClick={onSkipToReg}
            type="button"
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Skip to reg
          </button>

        </div>
      </div>
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative animate-fadeIn">
      {/* Close Button */}
      <button 
        onClick={() => setIsModalOpen(false)} 
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Login / Sign Up
      </h2>

      {/* Form */}
      <form className="space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <button 
            type="button" 
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </section>
  );
};

export default Hero;

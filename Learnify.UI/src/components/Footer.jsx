import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-6 px-8 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex items-center">
            <img src={Logo} alt="Learnify Logo" className="h-8" />
            <h2 className="text-blue-600 font-bold ml-2">Learnify</h2>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-gray-700 font-medium text-lg mb-2">Information</h3>
          <ul className="text-gray-600">
            <li className="mb-1"><Link to="/about">About us</Link></li>
            <li className="mb-1"><Link to="/">Home</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-gray-700 font-medium text-lg mb-2">Helpful links</h3>
          <ul className="text-gray-600">
            <li className="mb-1"><Link to="/privacy">Privacy Policy</Link></li>
            <li className="mb-1"><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-gray-700 font-medium text-lg mb-2">Contact us</h3>
          <ul className="text-gray-600">
            <li className="mb-1 flex items-center">
              <span className="mr-1">&#9742;</span> 484 324 2400
            </li>
            <li className="flex items-center">
              <span className="mr-1">&#9993;</span> info@learnify.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 
import React, { useState } from "react";
import logo from "../assets/images/newlogo.jpg";
import signuimg from "../assets/images/signup.jpg";
import HeroImg from "../assets/images/hero.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
   
      <div className="container mx-auto flex flex-column justify-between items-center p-4">
  
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="h-auto max-w-[120px] sm:max-w-[100px] md:max-w-[150px] w-auto" />
        </div>

   
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-6 text-gray-700
           font-semibold absolute md:relative
            bg-white md:bg-transparent
        shadow-md md:shadow-none`}
        >
          <h3 className="cursor-pointer hover:text-blue-500 transition text-center md:text-left">Explore</h3>
          <h3 className="cursor-pointer hover:text-blue-500 transition text-center md:text-left">About Us</h3>
          <h3 className="cursor-pointer hover:text-blue-500 transition text-center md:text-left">Contact Us</h3>
        </nav>
      </div>

   
      <div className="mt-6 mb-4 mx-auto px-4 md:px-0">
        <img className="w-full object-cover flex" src={HeroImg} alt="HeroImg" />
      </div>

      
      <div className="mt-6 mb-4 mx-auto px-4 md:px-0">
        <img
          src={signuimg}
          className="w-full  object-cover rounded-lg shadow-md"
          alt="signuimg"
        />
      </div>
    </header>
  );
}

export default Header;

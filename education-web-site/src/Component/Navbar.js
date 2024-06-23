import React, { useState } from "react";
import { Link } from "react-scroll";

import Button from "../Component/Layout/button";

import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <div className="fixed z-10 w-full">
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <h1 className="text-xl font-semibold">SDCording</h1>
          </div>

          <nav className="flex-row items-center hidden gap-8 text-lg font-medium md:flex">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              HOME
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="couses"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              COURSES
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              ABOUT US
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              TEAM
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="price"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              PRICING
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              CONTACT
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>

          <div className="hidden gap-4 lg:flex">
            <Button title="Login" onClick={handleLoginClick} />
            <Button title="Register" onClick={handleRegisterClick} />
          </div>

          <div className="flex items-center md:hidden">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="couses"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            COURSES
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            TEAM
          </Link>
          <Link
            to="price"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            PRICING
          </Link>

          <Button title="Login" onClick={handleLoginClick} />
          <Button title="Register" onClick={handleRegisterClick} />
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-8 rounded shadow-md bg-backgroundColor">
            <AiOutlineClose
              size={24}
              className="absolute cursor-pointer top-4 right-4"
              onClick={handleCloseLogin}
            />
            <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1 text-black-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-black-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="border-2 px-6 py-1 border-white bg-[#8c14e4] hover:text-[#d1a8f0] transition rounded-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-8 rounded shadow-md bg-backgroundColor">
            <AiOutlineClose
              size={24}
              className="absolute cursor-pointer top-4 right-4"
              onClick={handleCloseRegister}
            />
            <h2 className="mb-4 text-2xl font-bold text-center">Register</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1 text-black-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-black-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-black-700">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Confirm your password"
                />
              </div>
              <button
                type="submit"
                className="border-2 px-6 py-1 border-white bg-[#8c14e4] hover:text-[#d1a8f0] transition rounded-full"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

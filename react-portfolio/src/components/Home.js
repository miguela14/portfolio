import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/IMG_0045.JPG';
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Full Stack Web Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
           I have 6 months of experience in graphics design and web development.
          Currently, I love to work on web application using technologies like
          React, Tailwind, and Mongodb.
        </p>
        <div>
          <NavLink
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </NavLink>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
    );
};
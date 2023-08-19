import React from 'react';
import "./Footer.css";

export const Footer = () => {
    return(
        <footer className="footer fixed bottom-0 left-0 w-full bg-gray-900 py-6 text-white">
        <div className="container mx-auto">
          <div className="footer__content flex flex-col md:flex-row justify-between items-center">
            <div className="footer__left text-center md:text-left mb-4 md:mb-0">
              <p className="text-white">&copy; 2023 Miguel Moreno. All rights reserved.</p>
              <p className="text-white">Email: miguelmoreno142@yahoo.com</p>
              <div className="footer__social mt-2">
                {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  LinkedIn
                </a> */}
                <a href="https://github.com/miguela14" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  https://github.com/miguela14
                </a>
              </div>
            </div>
            {/* <div className="footer__right">
              <ul className="footer__nav">
                <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
                <li><a href="#resume" className="text-gray-300 hover:text-white">Resume</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    );
};
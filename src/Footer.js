import React from "react";
import "./index.css";
import resume from "./assets/resume.png";
import uni from "./assets/university.png";
import app from "./assets/devops.png";
import blog from "./assets/blogger.png";

const Footer = () => {
  return (
    <div className="fixed bottom-0 sm:hidden p-2 w-full justify-center flex bg-color-default border-t border-black">
      <div className="flex justify-between w-5/6">
        <div className="block justify-center items-center">
          <div className="w-full flex justify-center">
            <img
              className="object-scale-down block w-8"
              src={blog}
              alt="Blog icons created by BomSymbols - Flaticon"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="block mt-1 text-xl hover:font-bold">
              blogs
            </button>
          </div>
        </div>
        <div className="block justify-center items-center">
          <div className="w-full flex justify-center">
            <img
              className="object-scale-down block w-8"
              src={app}
              alt="Software icons created by SBTS2018 - Flaticon"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="block mt-1 text-xl hover:font-bold">apps</button>
          </div>
        </div>
        <div className="block justify-center items-center">
          <div className="w-full flex justify-center">
            <img
              className="object-scale-down block w-8"
              src={uni}
              alt="ingapore icons created by smashingstocks - Flaticon"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="block mt-1 text-xl hover:font-bold">uni</button>
          </div>
        </div>

        <div className="block justify-center items-center">
          <div className="w-full flex justify-center">
            <img
              className="object-scale-down block w-8"
              src={resume}
              alt="CV icons created by spaceman.design - Flaticon"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="block mt-1 text-xl hover:font-bold">
              resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

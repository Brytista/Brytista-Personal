import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center item-center">
      <div className="sm:hidden flex justify-center items-center align-items-center p-6 z-[100] w-[90rem] relative m-2">
        <Link to="/">
          <button className="text-4xl pacifico hover:font-bold">
            Brytista
          </button>
        </Link>
      </div>
      <div className="sm:flex hidden justify-between items-center align-items-center p-6 z-[100] w-[90rem] relative m-2">
        <div>
          <Link to="/">
            <button className="text-4xl pacifico hover:font-bold">
              Brytista
            </button>
          </Link>
        </div>
        <div>
          <Link to="/blogs">
            <button className="pr-10 text-2xl font-medium text-center hover:font-bold">
              blogs
            </button>
          </Link>
          <Link to="/apps">
            <button className="pr-10 text-2xl font-medium text-center hover:font-bold">
              apps
            </button>
          </Link>
          <Link to="uni">
            <button className="pr-10 text-2xl font-medium text-center hover:font-bold">
              uni
            </button>
          </Link>
          <Link to="resume">
            <button className="pr-6 text-2xl font-medium text-center hover:font-bold">
              resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

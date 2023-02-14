import React from "react";
import mainImage from "./assets/main_image.png";
import "./index.css";
import pp from "./assets/pp.jpg";

const Main = () => {
  return (
    <div className="overflow-x-hidden relative justify-center items-center flex">
      <div className="relative max-w-screen-xl block xsm:flex sm:top-[20%] p-6 md:p-12 justify-center">
        <div className="max-w-full hidden xl:w-[35%] mid:flex items-start justify-center">
          <img className="object-scale-down w-[70%] " src={mainImage} />
        </div>
        <div className="xl:ml-30 xsm:mt-0 mt-40 xl:w-1/2 xsm:mx-10 mid:mx-0">
          <h1 className="xsm:text-3xl text-2xl text-md caveat">
            Hello world, I'm Brytista! 👋
          </h1>

          <h1 className="xsm:text-5xl text-4xl my-4 xsm:my-4 mid:my-4 xl:my-10 wendyone ">
            I make apps and write articles to help you be more productive and
            learn more effectively.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;

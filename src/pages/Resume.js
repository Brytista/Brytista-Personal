import React from "react";

import linkedin from "../assets/LinkedInLogo.png";
import gmail from "../assets/gmail.png";
import telegram from "../assets/Telegram-logo.png";

const Resume = () => {
  return (
    <div className="mt-28 w-full flex items-center justify-center">
      <div class="bg-white p-6 shadow-lg rounded-lg text-center max-w-md">
        <h3 class="text-xl font-medium mb-4">
          🚧Hello, page is under construction!🚧
        </h3>
        <p class="text-gray-700 mb-4 text-md">
          Thank you for visiting, I am currently constructing the page. Have any
          suggestions on how I should improve my website? Feel free to contact
          me!
        </p>
        <div className="flex justify-center">
          <div className="flex w-1/2 justify-between">
            <button className="w-8 h-8">
              <a
                href="https://www.linkedin.com/in/bryan-atista-kiely-695393135/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="Linkedin Image"
                  class="hover:opacity-75 cursor-pointer transition-opacity duration-300"
                />
              </a>
            </button>
            <button className="w-8 h-8">
              <a href="mailto:brytista@gmail.com" target="_blank">
                <img
                  src={gmail}
                  alt="Gmail Image"
                  class="hover:opacity-75 cursor-pointer transition-opacity duration-300"
                />
              </a>
            </button>
            <button className="w-8 h-8">
              <a href="https://t.me/brytista" target="_blank">
                <img
                  src={telegram}
                  alt="Telegram Image"
                  class="hover:opacity-75 cursor-pointer transition-opacity duration-300"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

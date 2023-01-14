import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-gray-800 to-gray-800 p-4 text-gray-500">
        <div className="flex flex-col justify-center items-center mx-auto pt-4 sm:w-full">
          <div>
            <p>
              <pre>
                Made with ❤ by Raghav. Copyright © {new Date().getFullYear()}.
                All Rights Reserved.
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

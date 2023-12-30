import React from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import FooterData from "../data/FooterData";

function Footer() {
  return (
    <>
      <div className="bg-gray-700 text-stone-100 h-28 flex flex-col items-center justify-center ">
        <h1 className="text-center pt-2 font-semibold text-lg">
          &copy; {new Date().getFullYear()} Amir Hossein Doosti - AmirSenpai.
          All rights reserved
        </h1>
        <span className="flex flex-row mt-4">
          <a
            target="_blank"
            href={FooterData[0].github}
            className="text-3xl ml-4 hover:text-github transition-all"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href={FooterData[0].discord}
            className="text-3xl ml-4 hover:text-discord transition-all"
          >
            <FaDiscord />
          </a>
          <a
            target="_blank"
            href={FooterData[0].email}
            className="text-3xl ml-4 hover:text-gmail transition-all"
          >
            <MdOutlineEmail />
          </a>
        </span>
        {/* {FooterData.map((item, index) => (
          <div key={index}>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default Footer;

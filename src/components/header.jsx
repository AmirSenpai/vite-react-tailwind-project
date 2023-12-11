import React from "react";
import reactLogo from "./public/react.svg";
import viteLogo from "./public/vite.svg";
function Header() {
  return (
    <>
      <div className="h-fit bg-gray-700 text-stone-100">
        <h1 className="text-center text-2xl md:text-4xl pt-2 font-semibold">
          <img
            src={reactLogo}
            alt="react logo"
            className="inline-block h-6 md:h-10"
          />{" "}
          AmirHossein{" "}
          <img
            src={viteLogo}
            alt="vite logo"
            className="inline-block h-6 md:h-10"
          />
        </h1>
        <p className="text-center mt-5 md:text-lg font-vazir font-medium">
          My First Website With React.js + Vite + TailwindCSS
        </p>
        <div className="flex flex-row gap-9 items-center justify-center mt-4 pb-3">
          <a
            href="https://github.com/AmirSenpai/vite-react-tailwind-project"
            target="_blank"
          >
            <button className="btn-blue">This Website's GitHub Repo</button>
          </a>
          <a
            href="https://www.coffeebede.com/amirhosseind"
            target="_blank"
            className="h-34 w-36 flex m-0 p-0"
          >
            <button className="btn-blue">Buy Me coffee</button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;

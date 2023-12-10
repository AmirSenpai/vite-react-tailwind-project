import React from "react";
import Logo from "./assets/public/react.svg";
import viteLogo from "./assets/public/vite.svg";
function Header() {
  return (
    <>
      <div className="h-28 bg-stone-700 text-stone-300">
        <h1 className="text-center text-4xl pt-2">
          <img src={Logo} alt="react logo" className="inline-block" />{" "}
          AmirHossein{" "}
          <img src={viteLogo} alt="vite logo" className="inline-block" />
        </h1>
        <p className="text-center mt-5 text-lg font-vazir">
          My First Website With React.js + Vite + TailwindCSS
        </p>
      </div>
    </>
  );
}
export default Header;

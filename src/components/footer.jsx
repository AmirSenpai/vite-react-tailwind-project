import React from "react";
function Footer() {
  return (
    <>
      <div className="bg-gray-700 text-stone-100 h-14 text-center flex items-center justify-center">
        <h1>
          &copy; {new Date().getFullYear()} Amir Hossein Doosti - AmirSenpai.
          All rights reserved
        </h1>
      </div>
    </>
  );
}
export default Footer;

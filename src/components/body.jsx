import React from "react";
import Maintest from "/src/data/Maintest";
import Introbody from "./introbody";
import Main from "./mainbody";

function Body() {
  return (
    <>
      <div className="h-screen2 bg-gray-800">
        {Maintest.map((item) => (
          <Introbody
            year={item.year}
            title={item.title}
            name={item.name}
            link={item.link}
            web={item.web}
          />
        ))}
        <hr className="bg-rose-800 border-0 h-1 my-2" />
        <Main />
      </div>
    </>
  );
}

export default Body;

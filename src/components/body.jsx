import React from "react";
import Maintest from "/src/data/Maintest";
import Introbody from "./introbody";
import Main from "./mainbody";

function Body() {
  return (
    <>
      <div className="h-screen2 bg-gray-800">
        <Main />
        {Maintest.map((item) => (
          <Introbody
            year={item.year}
            title={item.title}
            link={item.link}
            imgsrc={item.imgsrc}
            a_tag={item.a_tag}
          />
        ))}
      </div>
    </>
  );
}

export default Body;

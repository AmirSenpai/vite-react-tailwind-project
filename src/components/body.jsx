import React from "react";
import Maintest from "/src/data/Maintest";
import Bodydata from "./bodydata";

function Body() {
  return (
    <>
      <div className="h-screen bg-gray-800">
        {Maintest.map((item) => (
          <Bodydata
          year={item.year}
          title={item.title}
          name={item.name}
          link={item.link}
          />
        ))}
      </div>
    </>
  );
}

export default Body;

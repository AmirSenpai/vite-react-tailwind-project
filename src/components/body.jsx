import React, { useEffect, useState } from "react";
import Maintest from "/src/data/Maintest";
import Main from "./mainbody";

function Body() {
  useEffect(() => {
    // Check if IDs are already in localStorage
    const storedIds = localStorage.getItem("propertyIds");
    if (!storedIds) {
      // Generate unique IDs for each property of each item
      const generatedIds = Maintest.reduce((acc, item, index) => {
        const propertyIds = Object.keys(item).reduce((propAcc, propKey) => {
          propAcc[propKey] = `item-${index}-${propKey}`;
          return propAcc;
        }, {});
        acc[index] = propertyIds;
        return acc;
      }, {});

      localStorage.setItem("propertyIds", JSON.stringify(generatedIds));
    }
  }, []);

  return (
    <>
      <div className="h-full">
        <Main />
        {Maintest.map((item, index) => (
          <div
            key={index}
            id={`item-${index}`}
            className="flex flex-col gap-5 items-center justify-center"
          >
            <h2
              id={`title-${index}`}
              className="md:text-xl font-semibold -mb-2 mt-4 border-2 border-black bg-white p-1 rounded-lg md:w-56 w-40 text-center"
            >
              {item.title}
            </h2>
            <img
              id={`img-${index}`}
              src={item.imgsrc}
              alt={item.title}
              className="w-80 md:w-96 object-cover rounded-lg border-yellow-200 border blur-sm hover:filter-none transition delay-150"
            />
            <h2
              id={`year-${index}`}
              className="-m-2 bg-white p-1 w-28 rounded-xl font-bold text-center"
            >
              {item.year}
            </h2>
            <p
            id={`description-${index}`}
            className="text-black font-semibold w-2/3 md:w-fit px-2 py-3 text-base md:text-lg text-center bg-slate-400 rounded-md"
            >
              ▄▌ {item.description} ▐▄
            </p>
            {item.link ? (
              <h2
                id={`link-h2-${index}`}
                className="flex items-center justify-center flex-col md:flex-row"
              >
                <a
                  href={item.link}
                  target="_blank"
                  id={`link-${index}`}
                  className="btn-blue bg-emerald-900 font-medium text-lg md:text-xl"
                >
                  {item.title} {item.a_tag}
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  id={`github-a-${index}`}
                  className="btn-blue bg-amber-700 hover:bg-amber-800 font-medium text-base mt-4 md:text-xl md:ml-5 md:mt-0"
                >
                  {item.title} github
                </a>
              </h2>
            ) : (
              <h2
                id={`link-h2-${index}`}
                className="flex items-center justify-center flex-col md:flex-row"
              >
                <a
                  id={`link-empty-${index}`}
                  className="btn-blue bg-emerald-900 font-medium text-lg md:text-xl"
                  // onClick={test}
                >
                  No Preview Available
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  id={`github-a-${index}`}
                  className="btn-blue bg-amber-700 hover:bg-amber-800 font-medium text-base mt-4 md:text-xl md:ml-5 md:mt-0"
                >
                  {item.title} github
                </a>
              </h2>
            )}

            <hr className="w-3/4 md:w-full h-0.5 border-none bg-amber-400 my-3" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Body;

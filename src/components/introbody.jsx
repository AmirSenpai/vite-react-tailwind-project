import React from "react";
function Introbody({ year, title, name, link, web }) {
  return (
    <>
      <h1 className="text-center text-amber-500 text-xl md:text-2xl pt-3 pb-2">
        {web}
      </h1>
      <p className="text-center text-emerald-300 md:text-lg text-lg">
        hello! my name is {name} and im a {title}. its currently the year {year}
        , here's one of my works{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 underline"
        >
          click me
        </a>
      </p>
    </>
  );
}
export default Introbody;

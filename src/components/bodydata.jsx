import React from "react";
function Bodydata({ year, title, name, link}) {
  return (
    <>
    <p className="text-center text-blue-400">
      hello! my name is {name} and im a {title}. its currently the year {year},
      here's one of my works{" "}
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-200">
        click me
      </a>
    </p>
    </>
  );
}
export default Bodydata;

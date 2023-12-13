import React from "react";
function Introbody({ year, title, link, imgsrc, a_tag }) {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className="md:text-xl font-semibold -mb-2 mt-2 bg-white p-1 rounded-lg md:w-56 w-40 text-center">{title}</h2>
        <img
          src={imgsrc}
          alt={title}
          className="w-80 md:w-96 object-cover rounded-lg border-yellow-200 border"
        />
        <h2 className="-m-2 bg-white p-1 w-28 rounded-xl font-bold text-center">
          {year}
        </h2>
        <h2>
          <a href={link} className="btn-blue bg-emerald-900 font-medium">{title} {a_tag}</a>
        </h2>
        <hr className="w-full h-0.5 border-none bg-emerald-400" />
      </div>
    </>
  );
}
export default Introbody;

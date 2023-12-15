import React, { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex items-center justify-center flex-row">
        <h2 className="md:text-xl my-2 text-white bg-emerald-900 p-2 rounded">
          My Top 5 <span className="underline text-amber-400">Best</span>{" "}
          Projects
        </h2>
        <button
          className="btn-blue ml-4 font-normal bg-red-600 hover:bg-red-800 p-1"
          onClick={() => setCount(count + 1)}
          id="button"
        >
          ❤ {count}
        </button>
      </div>
    </>
  );
}
export default Main;

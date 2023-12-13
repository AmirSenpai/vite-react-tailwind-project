import React from "react";

function Main() {
  function clickon() {
  let i = 0;
  i++;
  const like = document.getElementById("button").innerHTML = "❤ = " + i;
  alert("Thank You :)");
  if (i > 0){
    document.getElementById("button").disabled = true;
  }
  }
  return (
    <>
      <div className="flex items-center justify-center flex-row">
        <h2 className="md:text-xl my-2 text-white bg-emerald-900 p-2 rounded">
          My Top 5 <span className="underline text-amber-400">Mini</span>{" "}
          Projects
        </h2>
        <button className="btn-blue ml-4 font-normal bg-red-600 hover:bg-red-800 p-1" onClick={clickon} id="button">❤ = 0</button>
      </div>
    </>
  );
}
export default Main;

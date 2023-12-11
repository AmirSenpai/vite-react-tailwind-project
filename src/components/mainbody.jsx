import React from "react";

function Main() {
  function clickon() {
    const inputvalue = document.getElementById("stitle").value;
    if (inputvalue.length == 0) {
      alert("please write something");
    }
    // else(inputvalue == "hey"){
    //     alert()
    // }
    else {
      document.querySelector("h2").innerHTML = inputvalue;
    }
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h2
          className="text-xl my-1 mb-3 text-white border p-2 border-rose-500"
          id="writetitle"
        >
          Write Your Title
        </h2>
        <input
          type="text"
          name="storytitle"
          id="stitle"
          className="border-0 outline-0 p-1 rounded"
          required
        />
        <input
          type="button"
          value="submit"
          className="bg-rose-300 p-1 my-2 rounded active:bg-slate-600 duration-300"
          onClick={clickon}
        />
      </div>
    </>
  );
}
export default Main;

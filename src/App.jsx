import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <div className="bg-gray-900">
      <Header />
      <Body />
      <Footer />
      </div>
    </>
  );
}

export default App;

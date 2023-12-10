import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
);

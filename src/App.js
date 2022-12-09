import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />

      {/* APP BODY */}
      <div className="app__body">
        <Sidebar />
        {/* FEED */}
        {/* WIDGET */}
      </div>
    </div>
  );
}

export default App;

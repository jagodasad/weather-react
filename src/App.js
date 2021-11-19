import React from "react";
import "./App.css";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
      </div>
    </div>
  );
}

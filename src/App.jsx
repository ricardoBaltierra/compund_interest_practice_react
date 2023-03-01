import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useGlobalContext } from "./context";
import RequestComponent from "./RequestComponent";
import ButtonComponent from "./ButtonComponent";
import ResumeComponent from "./ResumeComponent";

function App() {
  return (
    <div className="App">
      <RequestComponent />
      <ButtonComponent />
      <ResumeComponent />
    </div>
  );
}

export default App;

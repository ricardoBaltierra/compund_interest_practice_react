import React from "react";
import { useGlobalContext } from "./context";

const ButtonComponent = () => {
  const { viewResume, btnAction /* , setDoAction */ } = useGlobalContext();

  if (viewResume) {
    return (
      <div>
        <button onClick={() => btnAction("Reset")}>Reset</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => btnAction("Consultar")}>Consultar</button>
      </div>
    );
  }
};

export default ButtonComponent;

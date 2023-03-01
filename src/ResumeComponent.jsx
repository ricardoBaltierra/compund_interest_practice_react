import React from "react";
import AnnualComponent from "./AnnualComponent";
import { useGlobalContext } from "./context";

const ResumeComponent = () => {
  const { viewResume, resume } = useGlobalContext();

  if (viewResume) {
    return (
      <div>
        <h1>Resumen Del Interes Compuesto</h1>
        <AnnualComponent />
      </div>
    );
  }
};

export default ResumeComponent;

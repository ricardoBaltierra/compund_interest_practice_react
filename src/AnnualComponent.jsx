import React from "react";
import { useGlobalContext } from "./context";

const AnnualComponent = () => {
  const { annual } = useGlobalContext();
  return (
    <div>
      <h1>Reporte Anual Del Interes Compuesto</h1>{" "}
    </div>
  );
};

export default AnnualComponent;

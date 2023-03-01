import React from "react";
import { useGlobalContext } from "./context";

export default function RequestComponent() {
  const { viewResume, setValue } = useGlobalContext();

  /*  function onChangeText(name, value) {
    console.log(name);
    console.log(value);
  } */

  if (viewResume) {
    return (
      <div>
        <h1>Informe Del Interes Compuesto</h1>
      </div>
    );
  } /* else { */
  return (
    <div>
      <h2>Calculo Del Interes Compuesto</h2>
      <br />
      <ul>
        <li>
          <h3>Inversión Inicial</h3>
          <input
            type="number"
            name="initialInvestment"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          ></input>
        </li>
        <li>
          <h3>Aportación Anual</h3>
          <input
            type="number"
            name="annualContribution"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          ></input>
        </li>
        <li>
          <h3>Incremento a Aportación Anual</h3>
          <input
            type="number"
            name="investmentIncrease"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          ></input>
        </li>
        <li>
          <h3>Años de inversión</h3>
          <input
            type="number"
            name="investmentYears"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          ></input>
        </li>
        <li>
          <h3>Rendimiento de Inversión</h3>
          <input
            type="number"
            name="investmentReturn"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          ></input>
        </li>
      </ul>
    </div>
  );
  /* } */
}

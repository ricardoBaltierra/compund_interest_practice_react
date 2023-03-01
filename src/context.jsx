import React, {
  useState,
  useContext,
  /* useReducer,  */ useEffect,
} from "react";
/* import reducer from "./reducer"; */
import requestData from "./data";

const AppContext = React.createContext();

/* const initialState = {
  viewResume: false,
  resume: null,
  annual: null,
  request: requestData,
}; */

const AppProvider = ({ children }) => {
  /* const [state, dispatch] = useReducer(reducer, initialState); */
  const [viewResume, setViewResume] = useState(false);
  /* const [doAction, setDoAction] = useState(""); */
  /* const [request, setRequest] = useState(requestData); */
  const [initialInvestment, setInitialInvestment] = useState();
  const [annualContribution, setAnnualContribution] = useState();
  const [investmentIncrease, setInvestmentIncrease] = useState();
  const [investmentYears, setInvestmentYears] = useState();
  const [investmentReturn, setInvestmentReturn] = useState();

  /* const btnAction = (type) => {
    dispatch({ type: "BtnAction", payload: type });
  }; */
  function btnAction(type) {
    if (type === "Consultar") {
      const request = {
        initialInvestment: initialInvestment,
        annualContribution: annualContribution,
        investmentIncrease: investmentIncrease,
        investmentYears: investmentYears,
        investmentReturn: investmentReturn,
      };
      console.log(request);
      //setViewResume(true);
    } else if (type === "Reset") {
      setViewResume(false);
    }
  }

  /* function setValue(value, id) {
    const item = request.filter((item) => {
      item.id === id;
    });
    item.value = value;
    const tmpRequest = request.filter((item) => {
      item.id !== id;
    });
    setRequest({ tmpRequest, item });
  } */

  function setValue(name, value) {
    if (name === "initialInvestment") setInitialInvestment(value);
    if (name === "annualContribution") setAnnualContribution(value);
    if (name === "investmentIncrease") setInvestmentIncrease(value);
    if (name === "investmentYears") setInvestmentYears(value);
    if (name === "investmentReturn") setInvestmentReturn(value);
  }

  /*  useEffect(() => {
    setValue;
  }, []); */

  return (
    <AppContext.Provider
      value={{
        /* ...state, */
        /* setDoAction, */
        /* request, */
        viewResume,
        btnAction,
        setValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

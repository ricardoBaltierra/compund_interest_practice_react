const reducer = (state, action) => {
  if (action.type === "BtnAction") {
    if (action.payload === "Consultar") {
      return { ...state, viewResume: true };
    } else if (action.payload === "Reset") {
      return { ...state, viewResume: false };
    }
  }
  return { ...state };
};
export default reducer;

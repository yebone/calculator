const reducer = (state, { type, value }) => {
  const { display } = state;
  switch (type) {
    case "num":
      return { display: display + value };
    case "operator":
      return { display: display + " " + value + " " };
    case "calculate":
      try {
        eval(display);
      } catch (error) {
        return { display: display };
      }
      return { display: eval(display) };
    case "clear":
      return { display: "" };
    case "delete":
      return { display: display.trim().slice(0, -1) };
    default:
      return state;
  }
};
export default reducer;

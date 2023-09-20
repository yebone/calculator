const reducer = (state, { type, value }) => {
  const { display, histories } = state;

  switch (type) {
    case "num":
      return { ...state, display: display + value };

    case "operator":
      // we need to calculate % of the last number.
      if (value === "%") {
        let displayArr = display.trim().split(" ");
        let number = Number(displayArr.pop());
        if (!isNaN(number)) {
          number = number / 100;
          return { ...state, display: displayArr.join(" ") + number };
        }
        return state;
      }
      // for other operator just add to display with space
      return { ...state, display: display + " " + value + " " };
    case "calculate":
      return { ...state, histories: [...histories, display], display: "" };
    case "clear":
      return { ...state, display: "", histories: [] };
    case "delete":
      return { ...state, display: display.trim().slice(0, -1) };
    default:
      return state;
  }
};
export default reducer;

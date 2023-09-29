const reducer = (state, { type, value }) => {
  // destructuring for readable
  const { display, histories, darkMode, calculated } = state;
  // display to mutable arr cuz it made easy to just use in operation
  let displayArr = display.trim().split(" ");
  let lastElement = Number(displayArr[displayArr.length - 1]);

  switch (type) {
    case "num":
      if (calculated) {
        return { ...state, display: display + value, calculated: false };
      }
      return { ...state, display: display + value };

    case "operator":
      // to avoid situation like ' + + - -'
      if (isNaN(lastElement)) return state;
      return { ...state, display: display + " " + value + " " };

    case "percent":
      // percentage of last number
      if (!isNaN(lastElement)) {
        lastElement = lastElement / 100;
        return {
          ...state,
          display: displayArr.slice(0, -1).join(" ") + " " + lastElement,
        };
      }

      return state;
    case "dot":
      if (!isNaN(lastElement)) {
        return state;
      }
      return { ...state, display: display + value };

    case "calculate":
      if (histories.length >= 3) {
        histories.shift();
      }
      return {
        ...state,
        histories: [...histories, display],
        display: "",
        calculated: true,
      };
    case "clear":
      return { ...state, display: "", histories: [] };
    case "delete":
      return { ...state, display: display.trim().slice(0, -1).trim() };
    case "darkMode":
      return { ...state, darkMode: !darkMode };
    default:
      return state;
  }
};
export default reducer;

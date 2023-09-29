import React, { useReducer } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import reducer from "./reducer";
import MainDisplay from "./components/MainDisplay";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    display: "",
    histories: [],
    darkMode: false,
    calculated: false,
  });
  return (
    <div className={`${state.darkMode ? "dark" : ""} h-full`}>
      <UserContext.Provider value={{ state, dispatch }}>
        <MainDisplay />
      </UserContext.Provider>
    </div>
  );
}

export default App;

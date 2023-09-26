import React, { useReducer } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import reducer from "./reducer";
import MainDisplay from "./components/MainDisplay";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    display: "",
    histories: [],
  });
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <MainDisplay />
      </UserContext.Provider>
    </div>
  );
}

export default App;

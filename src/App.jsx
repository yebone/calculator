import React, { useReducer } from "react";
import "./App.css";
import Display from "./components/display";
import DisplayForBtn from "./components/DisplayForBtn";
import { UserContext } from "./UserContext";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    display: "",
    histories: [],
  });
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <div className=" max-w-md mx-auto  ">
          <Display />
          <DisplayForBtn />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;

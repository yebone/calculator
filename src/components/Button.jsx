import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Button = ({ name, id }) => {
  const { dispatch } = useContext(UserContext);

  //To manage every click by btn's id
  // const clickHandler = async (event) => {
  //   switch (event.target.id) {
  //     case "num":
  //       setDisplay(display + event.target.value);
  //       break;
  //     case "operator":
  //       setDisplay(display + " " + event.target.value + " ");
  //       break;
  //     case "calculate":
  //       setDisplay(eval(display));
  //       break;
  //     case "clear":
  //       setDisplay("");
  //       break;
  //     case "delete":
  //       setDisplay(display.trim().slice(0, -1));
  //       break;
  //   }
  // };
  return (
    <button
      // onClick={clickHandler}
      value={name}
      id={id}
      onClick={(event) => dispatch({ type: id, value: event.target.value })}
      className=" bg-cyan-300 border-2 border-cyan-500 px-6 py-3 m-3 rounded-lg"
    >
      {name}
    </button>
  );
};

export default Button;

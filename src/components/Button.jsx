import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Button = ({ name, id }) => {
  const { dispatch } = useContext(UserContext);

  return (
    <button
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

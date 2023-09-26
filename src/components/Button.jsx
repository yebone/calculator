import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Button = ({ name, id }) => {
  const { dispatch } = useContext(UserContext);

  return (
    <button
      value={name}
      id={id}
      onClick={(event) => dispatch({ type: id, value: event.target.value })}
      className=" w-[23%] h-[77px] md:h-[88px] mb-2 bg-emerald-100 rounded-[20px] shadow-md active:bg-emerald-200"
    >
      {name}
    </button>
  );
};

export default Button;

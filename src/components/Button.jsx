import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Button = ({ name, id }) => {
  const { dispatch } = useContext(UserContext);

  return (
    <button
      value={name}
      id={id}
      onClick={(event) => dispatch({ type: id, value: event.target.value })}
      className=" w-[22%] h-[77px] gap-3 mb-3 bg-[#f9fbff]  rounded-[20px] border border-opacity-[0.2] drop-shadow-[-1px_-1px_7.5px_rgb(225,225,225)] active:bg-emerald-200 dark:text-white  dark:bg-[#374352] dark:drop-shadow-[-8px_-8px_5px_rgba(225,225,225,0.08)] dark:border-black dark:border-opacity-[0.2]  "
    >
      {name}
    </button>
  );
};

export default Button;

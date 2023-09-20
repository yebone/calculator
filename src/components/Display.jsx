import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Display = () => {
  const {
    state: { display, histories },
  } = useContext(UserContext);
  const [result, setResult] = useState("0");

  useEffect(() => {
    console.log(histories);
    try {
      eval(display);
      console.log(eval(display));
    } catch {
      return;
    }
    if (eval(display) !== undefined) {
      return setResult(eval(display));
    }

    try {
      eval(histories[histories.length - 1]);
      console.log("histories", eval(histories[histories.length - 1]));
    } catch (error) {
      console.log(error);
      return;
    }
    if (eval(histories[histories.length - 1]) !== undefined) {
      return setResult(eval(histories[histories.length - 1]));
    }
    return setResult("0");
  }, [display, histories]);
  return (
    <div
      id="display"
      className=" h-36  pr-5 mt-4 text-right bg-slate-300 flex-col items-center "
    >
      {histories?.map((history, i) => {
        return <h1 key={i}>{history}</h1>;
      })}
      <h1 id="operation" className=" text-lg font-semibold">
        {display}
      </h1>
      <h1 id="result" className=" text-lg font-semibold">
        {result !== "0" ? "=" : ""}
        {result}
      </h1>
    </div>
  );
};

export default Display;

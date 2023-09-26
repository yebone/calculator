import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import History from "./History";

const Display = () => {
  const {
    state: { display, histories },
  } = useContext(UserContext);
  const [result, setResult] = useState("0");

  useEffect(() => {
    try {
      eval(display);
    } catch {
      return;
    }
    if (eval(display) !== undefined) {
      return setResult(eval(display));
    }

    try {
      eval(histories[histories.length - 1]);
    } catch (error) {
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
      className=" h-40 pr-5 pt-3 text-right flex flex-col justify-between"
    >
      <div className="">
        {histories?.map((history, i) => {
          return <History key={i} history={history} />;
        })}
      </div>
      <div>
        <h1 id="operation" className=" text-2xl font-semibold">
          {display}
        </h1>
        <h1 id="result" className=" text-3xl font-semibold">
          {result !== "0" ? "=" : ""}
          {Number(result).toLocaleString()}
        </h1>
      </div>
    </div>
  );
};

export default Display;

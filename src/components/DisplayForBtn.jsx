import React from "react";
import Button from "./Button";
import buttons from "../data";

const DisplayForBtn = () => {
  return (
    <div className=" flex flex-wrap justify-evenly mt-3">
      {buttons?.map((btn) => {
        return <Button key={btn.name} name={btn.name} id={btn.id} />;
      })}
    </div>
  );
};

export default DisplayForBtn;

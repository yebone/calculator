import React from "react";
import Button from "./Button";

const DisplayForBtn = () => {
  const btnNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const btnOperators = ["-", "+", "*", "/"];
  return (
    <div>
      <div>
        {btnNames?.map((num) => {
          return <Button key={num} name={num} id="num" />;
        })}
      </div>
      <div>
        {btnOperators.map((operator) => {
          return <Button key={operator} name={operator} id="operator" />;
        })}
      </div>
      <Button name="=" id="calculate" />
      <Button name="clear" id="clear" />
      <Button name="delete" id="delete" />
    </div>
  );
};

export default DisplayForBtn;

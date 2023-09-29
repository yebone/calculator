import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" mt-2">
      <h1 className="flex justify-center gap-2 items-center text-lg dark:text-yellow-100">
        Made with <AiFillHeart fill="red" /> by Ye Bhone Myat
      </h1>
    </div>
  );
};

export default Footer;

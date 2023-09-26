import React from "react";
import Display from "./display";
import DisplayForBtn from "./DisplayForBtn";
import Footer from "./Footer";

const MainDisplay = () => {
  return (
    <div className=" max-w-md mx-auto bg-[#F9FBFF] shadow-md h-full">
      <Display />
      <DisplayForBtn />
      <Footer />
    </div>
  );
};

export default MainDisplay;

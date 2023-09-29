import React from "react";
import Display from "./display";
import DisplayForBtn from "./DisplayForBtn";
import Footer from "./Footer";

const MainDisplay = () => {
  return (
    <div className="bg-[#F9FBFF]  h-full  dark:bg-[#374352] max-w-md mx-auto md:mt-10  shadow-md rounded-lg">
      <Display />
      <DisplayForBtn />
      <Footer />
    </div>
  );
};

export default MainDisplay;

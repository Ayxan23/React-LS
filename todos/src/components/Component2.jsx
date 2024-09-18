import React from "react";
import Component3 from "./Component3";

const Component2 = () => {
  return (
    <div
      className="comp-2"
      onClick={() => {
        console.log("comp 2 click olundu");
      }}
    >
      <Component3 />
    </div>
  );
};

export default Component2;

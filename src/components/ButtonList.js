import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  return (
    <div className="flex">
      <Buttons name="cricket" />
      <Buttons name="All" />
      <Buttons name="CSS" />
      {/* <Buttons name="computer Science" /> */}
      <Buttons name="Virat Kohli" />
      <Buttons name="Ramayan" />
      {/* <Buttons name="Hanuman Chalisa" /> */}
      <Buttons name="Economics" />
      <Buttons name="Entartainment" />
    </div>
  );
};

export default ButtonList;

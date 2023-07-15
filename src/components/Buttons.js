import React from "react";

//in the project upgrade we need create a array of buttons and map it over.

const Buttons = ({ name }) => {
  return (
    <h1 className="p-1 px-10 m-2 rounded-md bg-gray-200 ">
      {name}
    </h1>
  );
};

export default Buttons;

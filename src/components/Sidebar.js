import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector(
    (store) => store.app.isMenuOpen
  );

  //early return
  if (!isMenuOpen) return null;

  return (
    <div className="w-48 border">
      <div>
        <ul className="p-2 m-2">
          <li className="pt-1 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="pt-1">Shorts</li>
          <li className="pt-1">Subscription</li>
          <li className="pt-1">History</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold m-2">Explore</h1>
        <ul className="p-2 m-2">
          <li className="pt-1">Music</li>
          <li className="pt-1">Games</li>
          <li className="pt-1">Trending</li>
          <li className="pt-1">Live</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold m-2">More From Youtube</h1>
        <ul className="p-2 m-2">
          <li className="pt-1">Setting</li>
          <li className="pt-1">Help</li>
          <li className="pt-1">FeedBack</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

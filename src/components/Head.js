import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQueary, setSearchQueary] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] =
    useState(false);

  const searchcache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchQueary]) {
        setSuggestions(searchcache[searchQueary]);
      } else {
        getSearchSugeestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQueary]);

  const getSearchSugeestion = async () => {
    console.log("appi call" + searchQueary);
    const data = await fetch(
      YOUTUBE_SUGGESTION_API + searchQueary
    );
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQueary]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className=" flex col-span-1 p-3 m-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer m-2"
          alt="menu"
          src="https://3.bp.blogspot.com/-u34mGNGd-n4/XHpH3S6nBPI/AAAAAAAACD0/pCh8MbBbdc0gbPzdz6O6qJbBwiusF79gQCLcBGAs/s1600/HamburgerMenuIcon.png"
        />
        <img
          className="h-8 ml-2 pt-1 mt-1"
          alt="Logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
        />
      </div>
      <div className="items-center col-span-10 p-3 m-3 ">
        <div>
          <input
            type="text"
            className="w-1/2 p-2 px-4 items-cente border border-gray-400 rounded-l-full"
            placeholder="Search...."
            onChange={(e) =>
              setSearchQueary(e.target.value)
            }
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-2 bg-gray-300 border border-gray-400 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[31rem] shadow-xl rounded-lg boder border-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-3 py-2 shadow-sm hover:bg-gray-100"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 p-3 m-3">
        <img
          className="h-8"
          alt="user-icon"
          src="https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </div>
  );
};

export default Head;

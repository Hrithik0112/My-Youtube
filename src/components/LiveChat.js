import React, { useEffect, useState } from "react";
import ChatMessege from "./ChatMessege";
import { useDispatch, useSelector } from "react-redux";
import { addmsg } from "../utils/chatSlice";
import {
  generateRandomName,
  makeRandomString,
} from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();

  const chatmsg = useSelector(
    (store) => store.chat.messeges
  );

  useEffect(() => {
    const i = setInterval(() => {
      //api polling

      dispatch(
        addmsg({
          name: generateRandomName(),
          messege: makeRandomString(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse ">
        {chatmsg.map((c, i) => (
          <ChatMessege
            key={i}
            name={c.name}
            messege={c.messege}
          />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border  border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addmsg({
              name: "Hrithik Dutta",
              messege: liveMsg,
            })
          );
          setLiveMsg("");
          //   console.log("on submit", liveMsg);
        }}
      >
        <input
          className="w-96"
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="bg-green-200 px-2 mx-2">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;

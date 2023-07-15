import React from "react";

const ChatMessege = ({ name, messege }) => {
  return (
    <div className="flex items-center shadow-md p-2">
      <img
        className="h-6"
        alt="user-icon"
        src="https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0"
      />
      <span className="pl-2 font-bold px-4">{name}</span>
      <span>{messege}</span>
    </div>
  );
};

export default ChatMessege;

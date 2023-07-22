import React from "react";

const ResultCard = ({ details }) => {
  if (!details) return null;

  const { snippet, statistics } = details;
  const { title, thumbnails, channelTitle, description  } = snippet;

  return (
    <div className="h-44 shadow-md flex">
      <img
        className="rounded-xl h-30 p-2 "
        src={thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <div>
        <h1 className="font-bold">{title}</h1>
        <h2>{channelTitle}</h2>
        <h3>
          {snippet.description}

        </h3>
      </div>
    </div>
  );
};

export default ResultCard;

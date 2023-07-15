import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;

  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="w-80 shadow-lg">
      <img
        className="rounded-md hover:scale-110"
        src={thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <h1 className="font-bold">{title}</h1>
      <h2>{channelTitle}</h2>
      <h3>
        {Math.trunc(statistics.viewCount / 1000000)}M views
      </h3>
    </div>
  );
};

export default VideoCard;

import React, { useState, useEffect } from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideo = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDeSe7AH8sAhzmoYJ6GUFdIKZAeZPeI2sc"
    );
    const json = await data.json();
    // console.log(json);

    // console.log(json.items);
    setVideos(json?.items);
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

import React, { useEffect, useState } from "react";

import ResultCard from "./ResultCard";
import { Link, useParams } from "react-router-dom";

const Results = () => {

  const {searchQueary} = useParams();

  const [searchedVideos, setSearchedVideos] = useState([]);



  // const searchedKeyword = searchParams.get("search_query");

  const getsearchedVideo = async () => {
    // const searchParams = new URLSearchParams(
    //   window.location.search
    // );
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQueary}&type=video&key=AIzaSyDeSe7AH8sAhzmoYJ6GUFdIKZAeZPeI2sc`
    );
    const json = await data.json();
    // console.log(json.items);
    setSearchedVideos(json?.items);
  };

  useEffect(() => {
    getsearchedVideo();
  }, []);

  return (
    <div className="w-full h-auto py-5 pl-14">
      {searchedVideos.map((vid) => (
        <Link key={vid.id.videoId} to={"/watch?v=" + vid.id.videoId}>
          <ResultCard details={vid} />
        </Link>
      ))}
    </div>
  );
};

export default Results;

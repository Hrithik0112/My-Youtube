export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=YOURKEYWORD&type=video&key=YOURAPIKEY" +
  process.env.REACT_APP_GOOGLE_API_KEY;

// const result_page = "/results?search_query=";

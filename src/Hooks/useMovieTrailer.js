import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const disptach = useDispatch();
  //fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    // console.log(trailer);
    disptach(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

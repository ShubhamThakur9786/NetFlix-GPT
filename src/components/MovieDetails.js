import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL, VID_CDN_URL } from "../utils/constants";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";
import icon2 from "../assets/play-button.png";

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const movieObj = location.state;

  // if (!movieObj) return;

  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    fetchTrailer();
  }, []);

  const fetchTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json.results.find((video) => video.type === "Trailer");
    console.log(trailer);
    setTrailerKey(trailer?.key);
  };

  const { original_title, overview } = movieObj;

  return (
    <div>
      <div>
        <div className="relative w-screen h-screen">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={IMG_CDN_URL + movieObj.backdrop_path}
            alt="movie"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div>
            {/* <VideoTitle title={original_title} overview={overview} /> */}
            <VideoBackground movieId={id} />
          </div>
          <div className="flex relative items-center justify-between px-24 py-10 bg-black">
            <div className="w-screen h-screen bg-black p-6 rounded-xl text-white max-w-xl">
              <h1 className="text-5xl font-bold text-center">
                {movieObj.original_title}
              </h1>
              <p className="mt-4 text-lg">{movieObj.overview}</p>
              <p className="ratings py-5 font-bold text-xl">
                Ratings: {movieObj.vote_average}
              </p>
              <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
                <div className="flex">
                  <img
                    className="text-xsm mr-2"
                    src={icon2}
                    alt="icon2"
                    style={{ width: "24px", height: "24px" }}
                  />{" "}
                  Play
                </div>
              </button>
              <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
                <div className="flex">More Info</div>
              </button>
            </div>

            <div className="w-2/5">
              <img
                className="w-scren h-screen cursor-pointer rounded-2xl object-contain hover:scale-110 transition-transform duration-200"
                alt="imgposter"
                src={IMG_CDN_URL + movieObj.poster_path}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

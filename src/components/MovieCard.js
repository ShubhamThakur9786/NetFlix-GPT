import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ Poster_Path }) => {
  return (
    <div className="w-56 h-auto m-4">
      <img
        className="w-full cursor-pointer rounded-2xl h-auto object-contain hover:scale-110 transition-transform duration-200"
        alt="imgposter"
        src={IMG_CDN_URL + Poster_Path}
      />
    </div>
  );
};

export default MovieCard;

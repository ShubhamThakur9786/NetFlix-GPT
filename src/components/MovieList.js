import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  const navigate = useNavigate();

  function handleClick(movie) {
    navigate(`/${movie.id}`, { state: movie });
  }

  return (
    <div className="overflow-x-auto text-white">
      <h1 className="text-3xl font-bold py-4 mx-6">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex movielist">
          {movies?.map((movie) => (
            <div key={movie.id} onClick={() => handleClick(movie)}>
              <MovieCard key={movie.id} Poster_Path={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

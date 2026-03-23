import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        1. MovieContainer
            -VideoBackground
            -VideoTitle
        2. SecondaryContainer
            -MoviesList * n
            -Cards * n
       */}
    </div>
  );
};

export default Browse;

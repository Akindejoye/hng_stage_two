import { useState, useEffect } from "react";
import Card from "../../components/card";
import { axios } from "../../requests";
import { TOP_RATED_MOVIES, SEARCH } from "../../api";
import Spinner from "../../components/Spinner";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Red from "../../assets/images/arrow-right-red.svg";
import "./style.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [likeMovie, setLikeMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    // Fetch and Search for movies
    const fetchMovies = async () => {
      setLoader(true);
      try {
        if (searchQuery) {
          const url = `${SEARCH}${searchQuery}`;
          const response = await axios.get(url);
          const data = response.data.results;
          const tenMovies = data?.slice(0, 10);
          setMovies(tenMovies);
        } else {
          // Fetch top-rated movies if no search query
          const topRatedMoviesUrl = TOP_RATED_MOVIES;
          const response = await axios.get(topRatedMoviesUrl);
          const data = response.data.results;
          const tenMovies = data?.slice(0, 10);
          setMovies(tenMovies);
        }
        setLoader(false);
      } catch (error) {
        setLoader(false);
        alert(error.message);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  // Like functionality
  const handleLikeMovie = (movieId) => {
    // Check if the movie is already liked
    if (likeMovie.includes(movieId)) {
      // Remove it from the likeMovie array
      setLikeMovie(likeMovie.filter((id) => id !== movieId));
    } else {
      // Add it to the likeMovie array
      setLikeMovie([...likeMovie, movieId]);
    }
  };

  return (
    <div className="homePage">
      <header>
        {/* Header components for homepage */}
        <Header onSearchSubmit={handleSearchSubmit} />
      </header>
      <main>
        <div className="main__header">
          <h2 className="main__header-text">Featured Movie</h2>
          <button className="main__header-btn">
            <span>See more</span>
            <img src={Red} alt="Right Pointer" />
          </button>
        </div>
        <div className="main__card-box">
          {movies?.map((movie) => (
            <Card
              movie={movie}
              key={movie.id}
              onLikeClick={() => handleLikeMovie(movie.id)}
              isLiked={likeMovie.includes(movie.id)}
            />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      {loader && <Spinner />}
    </div>
  );
};

export default HomePage;

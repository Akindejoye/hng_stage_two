import { useState, useEffect } from "react";
import Card from "../../components/card";
import { axios } from "../../requests";
import { TOP_RATED_MOVIES } from "../../api";
import Spinner from "../../components/Spinner";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Red from "../../assets/images/arrow-right-red.svg";
import "./style.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [likeMovie, setLikeMovie] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoader(true);
      try {
        const response = await axios.get(`${TOP_RATED_MOVIES}`);
        setLoader(false);
        const data = response.data.results;
        const tenMovies = data?.slice(0, 10);
        setMovies(tenMovies);
      } catch (error) {
        setLoader(false);
        alert(error.message);
      }
    };

    fetchMovies();
  }, []);

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
        <Header />
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

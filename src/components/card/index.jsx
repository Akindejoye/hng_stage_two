import { useState } from "react";
import Like from "../../assets/images/love.svg";
import Imdb from "../../assets/images/imdb.svg";
import Apple from "../../assets/images/apple.svg";
import "./style.css";

const Card = ({ movie }) => {
  const [likeMovie, setLikeMovie] = useState(false);

  return (
    <div className="main__card" data-testid="movie-card">
      <img
        data-testid="movie-poster"
        className="main__card-img"
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
      <figure
        className={likeMovie ? "main__card-likeBox like" : "main__card-likeBox"}
      >
        <img
          src={Like}
          alt="Like"
          className="main__card-like"
          onClick={() => setLikeMovie(!likeMovie)}
        />
      </figure>
      <span data-testid="movie-release-date" className="main__card-time">
        {movie?.release_date}
      </span>
      <h4 data-testid="movie-title" className="main__card-movieName">
        {movie.title}
      </h4>
      <div className="main__card-ratingBox">
        <div className="rating__imbdBox">
          <img src={Imdb} alt="Imdb" />
          <span>860 / 100</span>
        </div>
        <div className="main__card-appleBox">
          <img src={Apple} alt="Apple" />
          <p>{movie?.vote_average}</p>
        </div>
      </div>
      <p className="main__card-cathegory">Action, Adventure, Horror</p>
    </div>
  );
};

export default Card;

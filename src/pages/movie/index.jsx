import { useEffect, useState } from "react";
// import axios from "axios";
import { axios } from "../../requests";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api";
import Spinner from "../../components/Spinner";
import Sidebar from "../../components/sidebar";
import "./style.css";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const [loader, setLoader] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoader(true);
      try {
        const response = await axios.get(`${BASE_URL}${id}`);
        setLoader(false);
        const data = response.data;
        setMovieData(data);
      } catch (error) {
        setLoader(false);
        alert(error.message);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div className="movieDetails">
      <div className="movieDetails-sidebar">
        <Sidebar />
      </div>
      <figure className="movieDetails__header">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData?.backdrop_path}`}
          alt={movieData?.title}
          loading="lazy"
        />
      </figure>
      <div className="movieDetails__details-top">
        <h2 data-testid="movie-title">{movieData?.title}</h2>
        <div className="dot"></div>
        <span data-testid="movie-release-date">{movieData?.release_date}</span>
        <div className="dot"></div>
        <span>PG-13</span>
        <div className="dot"></div>
        <span data-testid="movie-runtime">{movieData?.runtime}</span>
      </div>
      <p data-testid="movie-overview" className="movieDetails__description">
        {movieData?.overview}
      </p>
      {loader && <Spinner />}
    </div>
  );
};

export default MovieDetails;

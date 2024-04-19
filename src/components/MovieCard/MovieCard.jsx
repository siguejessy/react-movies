import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.title}`}>
      <div className="container">
        <div className="card">
          <div
            className="card-style"
            style={{
              backgroundImage: `url(${movie.poster_path})`,
              backgroundSize: "180px",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
            <h1> {movie.title} </h1>
            <h3> Release Date: {movie.release_date} </h3>
        </div>
      </div>
    </Link>
  );
}

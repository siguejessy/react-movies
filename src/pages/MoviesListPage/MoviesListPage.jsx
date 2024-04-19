import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage({ movies, index }) {
  return (
    <div class="cardContainer">
      {movies.map((movie, idx) => (
        <div class="card">
          <MovieCard movie={movie} index={idx} key={idx} />
        </div>
      ))}
    </div>
  );
}

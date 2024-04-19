import { useParams } from "react-router-dom";

export default function MovieDetailPage({ movies }) {
  const { title } = useParams();
  const decodedName = decodeURIComponent(title);
  const movie = movies?.find(movie => movie.title === decodedName);

  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <>
      <div>{movie.title}</div>
      <div>{movie.release_date}</div>
      <ul>
        {movie.cast.map((a) => (
          <li> {a} </li>
        ))}
      </ul>
      <div>
        {" "}
        <img src={movie.poster_path} alt="movie poster" />{" "}
      </div>
    </>
  );
}
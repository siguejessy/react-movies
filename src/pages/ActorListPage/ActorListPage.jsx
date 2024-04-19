
import "./ActorListPage.css";
export default function ActorListPage({ movies }) {
  let actorMap = {};

  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      if (actorMap[actor]) {
        actorMap[actor].push(movie.title);
      } else {
        actorMap[actor] = [movie.title];
      }
    });
  });

  const actorList = Object.entries(actorMap);

  return (
    <>
      <div className="actors">
        <h1>All Actors</h1>
        <ul className="actor">
          {actorList.map(([actor, movies]) => (
            <li key={actor}>
              <h2>{actor}</h2> 
              <ul className="movieList">
                <h5>Featured In:</h5>
                {movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

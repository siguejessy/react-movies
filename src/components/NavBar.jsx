import { Link } from 'react-router-dom';


export default function NavBar({ user }) {
  return (
    <nav>
      <Link className="link" to="/movies">
        Movies
      </Link>
      &nbsp; | &nbsp;
      <Link className="link" to="/actors">
        {" "}
        Actors{" "}
      </Link>
      &nbsp; | &nbsp;
      <span className="hello"> hello, {user} </span>
    </nav>
  );
}
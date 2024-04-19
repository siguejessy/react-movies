import "./styles.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar.jsx"; // Import Nav
import ActorListPage from "./pages/ActorListPage/ActorListPage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import MoviesListPage from "./pages/MoviesListPage/MoviesListPage";
import { movies } from "./data/data.js";

export default function App() {
  const [user, setUser] = useState(null);

  function login(user) {
    setUser(user);
    console.log(user);
  }

  return (
    <div className="App">
      {user ? (
        <>
        <NavBar user={user} />
          <Routes>
            <Route path="" element={<Navigate to="/movies" />} />
            <Route
              path="/movies/:title"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route
              path="/movies"
              element={<MoviesListPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
            <Route path="" element={<Navigate to="/movies" />} />
          </Routes>
        </>
      ) : (
        <LoginPage login={login} />
      )}
    </div>
  );
}


import "./LoginPage.css";

import { useState } from "react";

export default function LoginPage({ login }) {
  const [user, setUser] = useState("");

  function handleLogin(evt) {
    evt.preventDefault();
    console.log(typeof login);
    login(user);
  }

  return (
    <>
      <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <h3>Enter a username</h3>
          <br />
          <input
            name="user"
            value={user}
            onChange={(evt) => setUser(evt.target.value)}
          /> &nbsp;&nbsp;&nbsp;
          <button type="submit" value="user">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

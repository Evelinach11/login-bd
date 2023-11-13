import { Link } from "react-router-dom";
import { useState } from "react";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div>
      <h2>Registration</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <Link to="/">Login</Link>
      <p>or</p>
      <Link to="/greeting">Greeting</Link>
    </div>
  );
};

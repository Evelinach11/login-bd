import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:8081/users/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("Login successful!");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Login failed!", error);
      });
  };
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <Link to="/registration">Go to Registation</Link>
    </div>
  );
};

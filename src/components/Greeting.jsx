import { Link } from "react-router-dom";

export const Greeting = () => {
  return (
    <div>
      <p>Hello , User</p>
      <Link to="/">Go to login </Link>
    </div>
  );
};

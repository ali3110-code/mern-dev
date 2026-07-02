import { Link } from "react-router-dom";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Blogify!</h1>

      <Link to="/signup">
        <button>Get Started</button>
      </Link>

      <span>or</span>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;

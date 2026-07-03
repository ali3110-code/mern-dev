import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Blogify</h1>

      <p>Create, manage, and share your blogs with ease.</p>

      <div className="home-buttons">
        <Link to="/signup">
          <button>Get Started</button>
        </Link>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

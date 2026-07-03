import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      setEmail("");
      setPassword("");

      navigate("/Dashboard");

      alert(`Success:", ${data.message}`);
    } else {
      alert(`Failed!, ${data.message}`);
    }
  };
  return (
    <div className="login">
      <h1>Welcome Back!</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link className="signup-link" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;

/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/");
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="dashboard">
      <h1>This is your personalized dashboard </h1>
      <p>You have successfully logged in.</p>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

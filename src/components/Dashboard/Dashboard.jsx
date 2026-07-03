/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";

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
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <h1>Welcome to your personalised dashboard!</h1>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

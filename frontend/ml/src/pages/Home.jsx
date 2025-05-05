import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Weather Predictor</h1>
      <button onClick={() => navigate("/login")}>Explore</button>
    </div>
  );
}

export default Home;

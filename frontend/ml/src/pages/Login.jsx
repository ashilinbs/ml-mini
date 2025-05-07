import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "1234") {
      navigate("/predict");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Section: Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img
          src="https://img.freepik.com/premium-vector/gardener-watering-flowerbed-garden-vector-worker-backyard-with-watering-can-providing_353502-1017.jpg?w=826"
          alt="Irrigation"
          className="w-3/4 h-auto"
        />
      </div>

      {/* Right Section: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-3xl px-10 py-12 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please login to access your account
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-teal-400 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-teal-500 shadow-md transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
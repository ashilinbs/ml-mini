
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Predict from "./pages/Predict";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

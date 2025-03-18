import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/signup" element={<h2>Sign Up Page</h2>} />
        <Route path="/dashboard" element={<h2>Dashboard (Protected)</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

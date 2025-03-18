import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";  // Correct import path

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <nav className="navbar">  {/* Use the class names from the CSS */}
            <h2 className="logo">My App</h2>
            <div className="navLinks">
                <Link to="/" className="link">Home</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard" className="link">Dashboard</Link>
                        <button onClick={() => setIsAuthenticated(false)} className="button">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="link">Login</Link>
                        <Link to="/signup" className="link">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">MovieMate</Link>   
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <Link to="/mugil-works" className="nav-link">A.C.Mugil's Work</Link>
        </div>  
    </nav>
}

export default NavBar
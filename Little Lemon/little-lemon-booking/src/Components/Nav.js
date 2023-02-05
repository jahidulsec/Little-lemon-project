import { Link } from "react-router-dom";


export default function Nav () {

    return (
        <nav className="header nav-title">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#" onClick={handleClick(about)}>About</a></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}
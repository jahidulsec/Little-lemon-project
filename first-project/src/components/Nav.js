import {Routes, Route, Link} from 'react-router-dom'
import BookingPage from './BookingPage';
import Main from './Main';

function Nav () {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><Link to='/booking_page'>Reservations</Link></li>
                    <li><a href='#'>Order Online</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
import { Link } from 'react-router-dom';



function Footer () {
    return (
        <div className="app-footer">
            <img src={require('../Image/logo2.png')} height="100px" alt='little lemon logo' />
            <div className='footer nav'>
                <h4 className="footer-section-title">Doormap Navigation</h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><Link to='/booking_page'>Reservations</Link></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className='footer contact'>
            <h4 className="footer-section-title">Contact</h4>
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <div className='footer soical-links'>
            <h4 className="footer-section-title">Social Media Links</h4>
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;




export default function Footer () {
    return (
        <footer className="footer col-12">
            <img src={require("../Image/logo2.png")} height="100px" alt="little lemon logo" />
            <section className="footer-doormat-nav">
                <nav>
                    <h6 className="nav-title">Doormat Navigation</h6>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </section>
            <section className="footer-contact">
                <h6 className="nav-title">Contact</h6>
                <nav>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </nav>
            </section>
            <section className="footer-social">
                <h6 className="nav-title">Social Media Links</h6>
                <nav>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </nav>
            </section>
        </footer>
    )
}
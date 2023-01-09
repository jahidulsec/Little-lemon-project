import Nav from "./Nav";
import logo from "../Image/logo1.png"
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Header () {
    return(
        <div className='App-Header'>
            <Link to='/'>
                <img src={logo} height='40px' alt='logo'/>
            </Link>
            <Nav />
        </div>
    );
}

export default Header;
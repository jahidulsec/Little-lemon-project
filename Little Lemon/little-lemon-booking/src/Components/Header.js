import { Link } from "react-router-dom";
import Nav from "./Nav";



export default function Header () {
    return (
        <header className="header col-12">
            <img className="header-img" src={require("../Image/logo1.png")} height="40px" alt="little lemon logo" />
            <Nav />
        </header>
    )
}
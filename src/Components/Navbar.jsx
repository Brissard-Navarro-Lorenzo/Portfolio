import "../Styles/Navbar/navbar.css";
import Logo from "../images/logo.jpg";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    function changmementEtatNavbar() {
        setOpen(!open);
    }
    return (
        <header className="header">
            <img src={Logo} alt="Logo du portfolio" />
            <nav className="navbar">
                <div className={`navbar_links ${open ? "navbar_links--active" : ""}`}>
                    <a href="#">A propos</a>
                    <a href="#">Projets</a>
                    <a href="#">Contact</a>
                </div>
                <div className="navbar_icons">
                    <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} onClick={changmementEtatNavbar}></i>
                </div>
            </nav>
            {open ? <div className="overlay" onClick={changmementEtatNavbar}></div> : ""}
        </header>
    );
}

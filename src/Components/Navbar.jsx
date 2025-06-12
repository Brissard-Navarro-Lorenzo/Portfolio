import "../Styles/Navbar/navbar.css";
import Logo from "../images/logo.webp";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    function changmementEtatNavbar() {
        setOpen(!open);
    }
    function EtatFalse() {
        setOpen(false);
    }
    const PageActuelle = useLocation();
    const url = PageActuelle.pathname;
    return (
        <header className="header">
            <Link to="/">
                <img src={Logo} alt="Logo du portfolio" />
            </Link>
            <nav className="navbar">
                <div className={`navbar_links ${open ? "navbar_links--active" : ""}`}>
                    {url === "/" ? (
                        <>
                            <a href="#formations" onClick={EtatFalse}>
                                A propos
                            </a>
                            <a href="#projets" onClick={EtatFalse}>
                                Projets
                            </a>
                            <a href="#contact" onClick={EtatFalse}>
                                Contact
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/" onClick={EtatFalse}>
                                Accueil
                            </Link>
                            <a href="#description" onClick={EtatFalse}>
                                Description
                            </a>
                            <a href="#technos" onClick={EtatFalse}>
                                Technologies
                            </a>
                            <a href="#etapes" onClick={EtatFalse}>
                                Etapes
                            </a>
                        </>
                    )}
                </div>
                <div className="navbar_icons">
                    <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} onClick={changmementEtatNavbar}></i>
                </div>
            </nav>
            {open ? <div className="overlay" onClick={changmementEtatNavbar}></div> : ""}
        </header>
    );
}

import React from "react";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="brand">
                <img src="" alt="logo" className="logo" />
                <h3>MOVIE HALL</h3>
            </div>

            <ul className="nav-links">
                <li>Movies</li>
                <li>Snacks</li>
                <li>Support</li>
            </ul>
        </div>
    );
};

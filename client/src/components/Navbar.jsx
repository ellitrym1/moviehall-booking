import React from "react";
import "./Navbar.css";

import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="brand">
                    <img src="" alt="logo" className="logo" />
                    <h3>MOVIE HALL</h3>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/snacks">Snacks</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

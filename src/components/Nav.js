import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="navbar">
            <li className="nav-link">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
                <Link to="/add">New Question</Link>
            </li>
            <li className="nav-link">
                <Link to="/leaderboard">Leader Board</Link>
            </li>
        </ul>
    );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import NavListItem from "./NavListItem";
import navListData from "./navListData";
import './header.css';
import Search from "./Search";

function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                Movies
            </Link>
            <ul className="nav">
                {navListData.map(nav => (
                    <NavListItem key={nav.id} nav={nav} />
                ))}
            </ul>
            <Search />
        </header>
    );
}

export default Header;
